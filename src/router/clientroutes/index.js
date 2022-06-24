// ** Routes Imports
import ClientDashboard from './ClientDashboard'
import Pages from './Pagesroutes'

// ** Document title
const TemplateTitle = '%s - PECKPOINT'


// ** Default Route
const DefaultRoute = '/dashboard'


// ** Merge Routes
const Routes = [
    ...ClientDashboard,
    ...Pages
]
export { DefaultRoute, TemplateTitle, Routes }