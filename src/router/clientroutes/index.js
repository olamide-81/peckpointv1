// ** Routes Imports
import ClientDashboard from './ClientDashboard'
import Pages from './Pagesroutes'

// ** Document title
const TemplateTitle = '%s - PECKPOINT'

const user = JSON.parse(localStorage.getItem('user'))
const userole = user.user.role.name


// ** Default Route
const DefaultRoute = (userole === 'User') ? '/dashboard' : '/admin/dashboard'


// ** Merge Routes
const Routes = [
    ...ClientDashboard,
    ...Pages
]
export { DefaultRoute, TemplateTitle, Routes }
