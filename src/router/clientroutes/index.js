// ** Routes Imports
import ClientDashboard from './ClientDashboard'
import Pages from './Pagesroutes'

// ** Document title
const TemplateTitle = '%s - PECKPOINT'


// ** Default Route
const { user } = JSON.parse(localStorage.getItem('user'))
const { role } = user
let DefaultRoute = '/dashboard'

if (role.slug === 'admin') {
    DefaultRoute = '/admin/dashboard'
}

// ** Merge Routes
const Routes = [
    ...ClientDashboard,
    ...Pages
]
export { DefaultRoute, TemplateTitle, Routes }