// ** Router Import
import Router from './router/Router'
import ClientRouter from './router/ClientRouter'

const App = () => ((true) ? <ClientRouter/> : <Router/>)

export default App
