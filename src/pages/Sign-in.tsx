import { Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AuthBox from "../components/AuthBox";
import { ROUTES } from "../routes";

export default function SignIn() {
    const { t } = useTranslation();

    return (
        <AuthBox title={t('login.title')}>
            <TextField placeholder={t('login.fields.email')} size="small" fullWidth />
            <TextField placeholder={t('login.fields.password')} size="small" fullWidth />
            <Button variant="contained" sx={{ color: 'white' }} fullWidth>{t('links.login')}</Button>
            <Typography paragraph sx={{ marginBottom: 0, textAlign: 'center' }}>{t('login.askCreateAcc')} <Link to={ROUTES.PUBLIC.SIGN_UP}> {t('login.createAcc')}</Link></Typography>
        </AuthBox>
    )
}