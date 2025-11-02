import { Box, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SignIn() {
    const { t } = useTranslation();

    return (
        <>
            <Box component="section" sx={{ display: 'flex', flexDirection: 'column', gap: '20px', p: 4, border: '1px solid grey', borderRadius: 4, minWidth: '262px'}}>
                <Typography variant="h4" component="h2" sx={{fontWeight: 600}}>{t('login.title')}</Typography>
                <TextField placeholder={t('login.fields.email')} size="small"/>
                <TextField placeholder={t('login.fields.password')} size="small"/>
                <Button variant="contained" sx={{ color: 'white' }}>{t('links.login')}</Button>
                <Typography paragraph sx={{ marginBottom: 0 }}>{t('login.askCreateAcc')} <Link to={'/auth/sign-up'}> {t('login.createAcc')}</Link></Typography>
            </Box>
        </>
    )
}