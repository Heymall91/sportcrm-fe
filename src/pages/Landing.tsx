import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ROUTES } from "../routes";

export default function Landing(){
    const { t } = useTranslation();

    return (
        <>
            <Box component="section" sx={{ p: 4, border: '1px solid grey', borderRadius: 4}}>
                <Typography variant="h4" sx={{ marginBottom: 4 }}>{t('greeting')}</Typography>
                <Link to={ROUTES.PUBLIC.SIGN_IN} style={{ textDecoration: 'none', marginRight: '16px' }}>
                    <Button variant="contained" sx={{ color: 'white' }}>
                        {t('links.login')}
                    </Button>     
                </Link>
            </Box>
        </>
    )
}