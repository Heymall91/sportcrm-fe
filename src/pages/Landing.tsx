import { Box, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ROUTES } from "../routes";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export default function Landing(){
    const { t } = useTranslation();
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    const handleLogin = () => {
        if(isAuthenticated){
            navigate(ROUTES.PUBLIC.SIGN_IN);
        }
        else{
            loginWithRedirect();
        }
    }

    return (
        <>
            <Box component="section" sx={{ p: 4, border: '1px solid grey', borderRadius: 4}}>
                <Typography variant="h4" sx={{ marginBottom: 4 }}>{t('greeting')}</Typography>
                <Button variant="contained" onClick={() => handleLogin()} sx={{ color: 'white' }}>
                    {t('links.login')}
                </Button>  
            </Box>
        </>
    )
}