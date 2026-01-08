import './App.css'
import Auth from './pages/Auth'
import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/Sign-in'
import SignUp from './pages/Sign-up'
import Landing from './pages/Landing'
import PublicLayout from './layouts/PublicLayout'
import PrivateLayout from  './layouts/PrivateLayout'
import Dashboard from './pages/Dashboard'
import Previous from './pages/Previous'
import Callback from './pages/Callback'
import Lessons from './pages/Lessons'
import Students from './pages/Students'
import CreateStudents from './pages/CreateStudents'
import EditStudents from './pages/EditStudents'
import Statistics from './pages/Statistics'
import Payments from './pages/Payments'
import Clubs from './pages/Clubs'
import Locations from './pages/Locations'
import Settings from './pages/Settings'
import { ROUTES } from './routes'

import { setTokenGetter } from './redux-app/api/users-api'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'

function App() {

  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {

    setTokenGetter(async () => {
      try{
      const token = await getAccessTokenSilently()
      
      return token
      } catch(err){
        console.error('Ошибка при получении токена:', err);
        throw err;
      }
    });

  }, [getAccessTokenSilently]);

  return (
    <>
      <Routes>
          <Route element={ <PublicLayout/> }>
            <Route path={ROUTES.PUBLIC.ROOT} element={<Landing/>}/>
            
            <Route path={ROUTES.PUBLIC.AUTH} element={<Auth/>}>
              <Route path={ROUTES.PUBLIC.SIGN_IN} element={<SignIn/>}/>
              <Route path={ROUTES.PUBLIC.SIGN_UP} element={<SignUp/>}/>
              <Route path={ROUTES.PUBLIC.CALLBACK} element={<Callback/>}/>
            </Route>
        </Route>
        <Route element={<PrivateLayout/>}>
            <Route path={ROUTES.PRIVATE.DASHBOARD} element={<Dashboard/>}></Route>
            <Route path={ROUTES.PRIVATE.PREVIOUS_EVENTS} element={<Previous/>}></Route>
            <Route path={ROUTES.PRIVATE.LESSONS} element={<Lessons/>}></Route>
            <Route path={ROUTES.PRIVATE.STUDENTS} element={<Students/>}></Route>
            <Route path={ROUTES.PRIVATE.CREATE_STUDENTS} element={<CreateStudents/>}></Route>
            <Route path={ROUTES.PRIVATE.EDIT_STUDENTS} element={<EditStudents/>}></Route>
            <Route path={ROUTES.PRIVATE.STATISTICS} element={<Statistics/>}></Route>
            <Route path={ROUTES.PRIVATE.PAYMENTS} element={<Payments/>}></Route>
            <Route path={ROUTES.PRIVATE.CLUBS} element={<Clubs/>}></Route>
            <Route path={ROUTES.PRIVATE.LOCATIONS} element={<Locations/>}></Route>
            <Route path={ROUTES.PRIVATE.SETTINGS} element={<Settings/>}></Route>
        </Route>

      </Routes>
    </>
  )
}

export default App
