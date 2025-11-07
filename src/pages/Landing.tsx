import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ROUTES } from "../routes";
import { useAuth0 } from "@auth0/auth0-react";

export default function Landing(){
    const { t } = useTranslation();
    const { loginWithRedirect } = useAuth0();

    return (
        <>
            <Box component="section" sx={{ p: 4, border: '1px solid grey', borderRadius: 4}}>
                <Typography variant="h4" sx={{ marginBottom: 4 }}>{t('greeting')}</Typography>
                <Link to={ROUTES.PUBLIC.SIGN_IN}  style={{ textDecoration: 'none', marginRight: '16px' }}>
                    <Button variant="contained" onClick={() => loginWithRedirect()} sx={{ color: 'white' }}>
                        {t('links.login')}
                    </Button>     
                </Link>
            </Box>
        </>
    )
}