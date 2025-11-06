import './App.css'
import Auth from './pages/Auth'
import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/Sign-in'
import SignUp from './pages/Sign-up'
import Landing from './pages/Landing'
import PublicLayout from './layouts/PublicLayout'
import PrivateLayout from  './layouts/PrivateLayout'
import Dashboard from './pages/Dashboard'
import { ROUTES } from './routes'

function App() {

  return (
    <>
      <Routes>
          <Route element={ <PublicLayout/> }>
            <Route path={ROUTES.PUBLIC.ROOT} element={<Landing/>}/>
            
            <Route path={ROUTES.PUBLIC.AUTH} element={<Auth/>}>
              <Route path={ROUTES.PUBLIC.SIGN_IN} element={<SignIn/>}/>
              <Route path={ROUTES.PUBLIC.SIGN_UP} element={<SignUp/>}/>
            </Route>
        </Route>
        <Route element={<PrivateLayout/>}>
            <Route path={ROUTES.PRIVATE.DASHBOARD} element={<Dashboard/>}></Route>
        </Route>

      </Routes>
    </>
  )
}

export default App
