import './App.css'
import Auth from './pages/Auth'
import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/Sign-in'
import SignUp from './pages/Sign-up'
import Landing from './pages/Landing'
import PublicLayout from './layouts/PublicLayout'
import PrivateLayout from  './layouts/PrivateLayout'

function App() {

  return (
    <>
      <Routes>
          <Route element={ <PublicLayout/> }>
            <Route path='/' element={<Landing/>}/>
            
            <Route path='/auth' element={<Auth/>}>
              <Route path='sign-in' element={<SignIn/>}/>
              <Route path='sign-up' element={<SignUp/>}/>
            </Route>
        </Route>
        <Route element={<PrivateLayout/>}>
            <Route path='/dashboard'></Route>
        </Route>

      </Routes>
    </>
  )
}

export default App
