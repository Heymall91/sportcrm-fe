import { Link } from "react-router-dom";
import { Typography, TextField, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ROUTES } from "../routes";
import AuthBox from "../components/AuthBox";

export default function SignUp() {
    const { t } = useTranslation();

    return (
        <AuthBox title={t('sign-up.title')}>
            <TextField placeholder={t('login.fields.email')} size="small" />
            <TextField placeholder={t('login.fields.password')} size="small" />
            <Button variant="contained" sx={{ color: 'white' }} fullWidth>{t('login.createAcc')}</Button>
            <Typography paragraph sx={{ marginBottom: 0, textAlign: 'center' }}>{t('login.haveAcc')} <Link to={ROUTES.PUBLIC.SIGN_IN}> {t('links.login')}</Link></Typography>
        </AuthBox>
    )
}