import { setTokenAuth } from "../redux-app/auth/authSlice";
import { useAppDispatch } from "../redux-app/hooks";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { ROUTES } from "../routes";
import { Box, CircularProgress } from "@mui/material";
import LeftSideBar from "../components/LeftSideBar";

const PrivateLayout = () => {
    const { isAuthenticated, getAccessTokenSilently, isLoading } = useAuth0();
    const dispatch = useAppDispatch();
    const [isValidToken, setIsValidToken] = useState(false);

    useEffect(() => {
        const checkToken = async () => {
            if(isAuthenticated){
                try{
                    const token = await getAccessTokenSilently();
                    dispatch(setTokenAuth(token))
                }
                catch(err){
                    console.error('Error getting access token:', err);
                }
            } 
            else{
                setIsValidToken(true);
            }
        }
        checkToken();
    }, [isAuthenticated, getAccessTokenSilently, dispatch]);

    if(isLoading || !isValidToken){
        return (
            <Box sx={{ display: 'none' }}>
                <CircularProgress />
            </Box>
        )
    }

    if(!isAuthenticated){
        return(
            <Link to={ROUTES.PUBLIC.SIGN_IN} replace/>
        )
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <LeftSideBar/>
            <Box component="main" sx={{ flexGrow: 1, p: 3, margin: 3 }}>
                <Outlet/>
            </Box>
        </Box>
    )
}

export default PrivateLayout;