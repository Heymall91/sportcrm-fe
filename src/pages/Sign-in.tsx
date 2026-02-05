import { Typography, TextField, Button } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AuthBox from "../components/AuthBox";
import { ROUTES } from "../routes";

export default function SignIn() {
    const { loginWithRedirect } = useAuth0();
    const { t } = useTranslation();

    return (
        <AuthBox title={t('login.title')}>
            <TextField placeholder={t('login.fields.email')} size="small" />
            <TextField placeholder={t('login.fields.password')} size="small" />
            <Button variant="contained" sx={{ color: 'white' }} onClick={() => loginWithRedirect()}>{t('links.login')}</Button>
            <Typography paragraph sx={{ marginBottom: 0, textAlign: 'center' }}>{t('login.askCreateAcc')} <Link to={ROUTES.PUBLIC.SIGN_UP}> {t('login.createAcc')}</Link></Typography>
        </AuthBox>
    )
}