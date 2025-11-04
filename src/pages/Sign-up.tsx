import { Link } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ROUTES } from "../routes";

export default function SignUp() {
    const { t } = useTranslation();

    return (
        <>
            <Box component="section" sx={{ display: 'flex', flexDirection: 'column', gap: '20px', p: 4, border: '1px solid grey', borderRadius: 4, minWidth: '268px'}}>
                <Typography variant="h4" component="h2" sx={{fontWeight: 600}}>{t('sign-up.title')}</Typography>
                <TextField placeholder={t('login.fields.email')} size="small"/>
                <TextField placeholder={t('login.fields.password')} size="small"/>
                <Button variant="contained" sx={{ color: 'white' }}>{t('login.createAcc')}</Button>
                <Typography paragraph sx={{ marginBottom: 0 }}>{t('login.haveAcc')} <Link to={ROUTES.PUBLIC.SIGN_IN}> {t('links.login')}</Link></Typography>
            </Box>
        </>
    )
}