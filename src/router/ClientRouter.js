// ** React Imports
import { Suspense, lazy, Fragment } from 'react'

// ** Utils

import { useLayout } from '@hooks/useLayout'
// import { AbilityContext } from '@src/utility/context/Can'
import { useRouterTransition } from '@hooks/useRouterTransition'

// ** Custom Components
import LayoutWrapper from '@layouts/components/layout-wrapper'

// ** Router Components
import { BrowserRouter as AppRouter, Route, Switch, Redirect } from 'react-router-dom'

// ** Routes & Default Routes
import { DefaultRoute, Routes } from './clientroutes'

// ** Layouts
import BlankLayout from '@layouts/BlankLayout'
import VerticalLayoutClient from '@src/layouts/ClientLayout'
import HorizontalLayout from '@src/layouts/HorizontalLayout'
import VerticalLayoutAdmin from '@src/layouts/VerticalLayout' 

const Router = () => {
  // ** Hooks
  const { layout, setLayout, setLastLayout } = useLayout()
  const { transition, setTransition } = useRouterTransition()
  const { user } = JSON.parse(localStorage.getItem('user')) || {}
  console.log(user) // 👉️ undefined

  const { role } = user || {}

  // ** ACL Ability Context
  //const ability = useContext(AbilityContext)

  // ** Default Layout
  
  const DefaultLayout = layout === 'horizontal' ? 'HorizontalLayout' : 'VerticalLayout'


  // ** All of the available layouts
  const Layouts = { BlankLayout, VerticalLayoutClient, HorizontalLayout, VerticalLayoutAdmin}

  // ** Current Active Item
  const currentActiveItem = null

  // ** Return Filtered Array of Routes & Paths
  const LayoutRoutesAndPaths = layout => {

    const LayoutRoutes = []
    const LayoutPaths = []

    if (Routes) {
      Routes.filter(route => {
        // ** Checks if Route layout or Default layout matches current layout
        if (route.layout === layout || (route.layout === undefined && DefaultLayout === layout)) {
          LayoutRoutes.push(route)
          LayoutPaths.push(route.path)
        }
      })
    }

    return { LayoutRoutes, LayoutPaths }
  }

  const NotAuthorized = lazy(() => import('@src/views/pages/misc/NotAuthorized'))

  // ** Init Error Component
  const Error = lazy(() => import('@src/views/pages/misc/Error'))

    // ** Verification Route
  const Verification = lazy(() => import('../../src/peckpoint-pages/authentication/VerifyEmailBasic'))

  /**
   ** Final Route Component Checks for Login & User Role and then redirects to the route
   */
  const FinalRoute = props => {
    const route = props.route

    // ** Assign vars based on route meta
 

    if (
      (localStorage.getItem('user') === null && route.meta === undefined) ||
      (user === null) ||
      (localStorage.getItem('user') === null && route.meta && !route.meta.authRoute)
    ) {
      /**
       ** If user is not Logged in & route meta is undefined
       ** OR
       ** If user is not Logged in & route.meta.authRoute, !route.meta.publicRoute are undefined
       ** Then redirect user to login
       */
      const { pathname } = window.location


      // return <Redirect to='/login' />

        if (pathname.substring(1) !== 'verifyemail') {

          window.location.href = '/login'

      } else {
          return <route.component {...props} />
      }
      
    } else if (route.meta && route.meta.authRoute && localStorage.getItem('user')) {
      // ** If route has meta and authRole and user is Logged in then redirect user to home page (DefaultRoute)

      
      if (role.slug === "user") {
          return <Redirect to='/dashboard' />
      } else if (role.slug === "admin") {
          return <Redirect to='/admin/dashboard' />
      }
    } else {
      // ** If none of the above render component
       return <route.component {...props} />
    }
  }

  // ** Return Route to Render
  const ResolveRoutes = () => {
    return Object.keys(Layouts).map((layout, index) => {
      // ** Convert Layout parameter to Layout Component
      // ? Note: make sure to keep layout and component name equal

      const LayoutTag = Layouts[layout]

      // ** Get Routes and Paths of the Layout
      const { LayoutRoutes, LayoutPaths } = LayoutRoutesAndPaths(layout)

      // ** We have freedom to display different layout for different route
      // ** We have made LayoutTag dynamic based on layout, we can also replace it with the only layout component,
      // ** that we want to implement like VerticalLayout or HorizontalLayout
      // ** We segregated all the routes based on the layouts and Resolved all those routes inside layouts

      // ** RouterProps to pass them to Layouts
      const routerProps = {}

      return (
        <Route path={LayoutPaths} key={index}>
          <LayoutTag
            layout={layout}
            setLayout={setLayout}
            transition={transition}
            routerProps={routerProps}
            setLastLayout={setLastLayout}
            setTransition={setTransition}
            currentActiveItem={currentActiveItem}
          >
            <Switch>
              {LayoutRoutes.map(route => {
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact === true}
                    render={props => {
                      // ** Assign props to routerProps
                      Object.assign(routerProps, {
                        ...props,
                        meta: route.meta
                      })

                      return (
                        <Fragment>
                          {/* Layout Wrapper to add classes based on route's layout, appLayout and className */}

                          {route.layout === 'BlankLayout' ? (
                            <Fragment>
                              <FinalRoute route={route} {...props} />
                            </Fragment>
                          ) : (
                            <LayoutWrapper
                              layout={DefaultLayout}
                              transition={transition}
                              setTransition={setTransition}
                              /* Conditional props */
                              /*eslint-disable */
                              {...(route.appLayout
                                ? {
                                  appLayout: route.appLayout
                                }
                                : {})}
                              {...(route.meta
                                ? {
                                  routeMeta: route.meta
                                }
                                : {})}
                              {...(route.className
                                ? {
                                  wrapperClass: route.className
                                }
                                : {})}
                            /*eslint-enable */
                            >
                              <Suspense fallback={null}>
                                <FinalRoute route={route} {...props} />
                              </Suspense>
                            </LayoutWrapper>
                          )}
                        </Fragment>
                      )
                    }}
                  />
                )
              })}
            </Switch>
          </LayoutTag>
        </Route>
      )
    })
  }

  return (
    <AppRouter basename=''>
      <Switch>
        {/* If user is logged in Redirect user to DefaultRoute else to login */}
        <Route
          exact
          path='/'
          render={() => {
            return localStorage.getItem('user') !== null ? <Redirect to={DefaultRoute} /> : <Redirect to='/login' />
          }}
        />
        {/* Not Auth Route */}
        <Route
          exact
          path='/verification/:dataname'
          render={() => (
            <Layouts.BlankLayout>
              <Verification/>
            </Layouts.BlankLayout>
          )}
        />
        {ResolveRoutes()}

        {/* NotFound Error page */}
        <Route path='*' component={Error} />
      </Switch>
    </AppRouter>
  )
}

export default Router