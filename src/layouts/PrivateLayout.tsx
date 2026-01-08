import { setTokenAuth, clearToken } from "../redux-app/auth/authSlice";
import { useAppDispatch } from "../redux-app/hooks";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { ROUTES } from "../routes";
import { Box, CircularProgress } from "@mui/material";
import LeftSideBar from "../components/LeftSideBar";

const PrivateLayout = () => {
    const { isAuthenticated, getAccessTokenSilently, isLoading, logout } = useAuth0();
    const dispatch = useAppDispatch();
    const [isValidToken, setIsValidToken] = useState(false);

    useEffect(() => {
        const checkToken = async () => {
            if(isAuthenticated){
                try{
                    const token = await getAccessTokenSilently();
                    dispatch(setTokenAuth(token));
                    setIsValidToken(true);
                }
                catch(err){
                    console.error('Error getting access token:', err);
                    dispatch(clearToken());
                    logout({ logoutParams: { returnTo: window.location.origin } });
                }
            } 
            else{
                dispatch(clearToken());
                setIsValidToken(true);
            }
        }
        checkToken();
    }, [isAuthenticated, getAccessTokenSilently, dispatch, logout]);

    if(isLoading || !isValidToken){
        return (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                <CircularProgress />
            </Box>
        )
    }

    if(!isAuthenticated){
        return(
            <Navigate to={ROUTES.PUBLIC.SIGN_IN} replace/>
        )
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'end' }}>
            <LeftSideBar/>
            <Box component="main" sx={{ p: 3, margin: 3 }}>
                <Outlet/>
            </Box>
        </Box>
    )
}

export default PrivateLayout;