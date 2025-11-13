import { Box, Button, Typography, Paper } from "@mui/material"
import { useTranslation } from "react-i18next"
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from "../themes/themeContext";

export default function Settings(){

    const {toggleTheme} = useThemeContext();
    const { t, i18n } = useTranslation();

    const toggleLang = (lang: string) => {
        i18n.changeLanguage(lang);
    }


    return(
        <Paper sx={{p:2, width: "600px"}}>
            <Box sx={{mb: 2}}>
                <Typography variant="h4" sx={{p: 1}}>
                    {t('settings.changeLang')}
                </Typography>
                <Box sx={{display: 'flex', gap: '20px', justifyContent: 'center'}}>
                    <Button variant="contained" onClick={() => toggleLang('en')}>{t('settings.lngEn')}</Button>
                    <Button variant="contained" onClick={() => toggleLang('ua')}>{t('settings.lngUa')}</Button>
                </Box>
            </Box>
            <Box>
                <Typography variant="h4" sx={{p: 1}}>
                    {t('settings.themeChange')}
                </Typography>
                <Box sx={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    <Button variant="outlined" onClick={() => toggleTheme('dark')}>
                        <Brightness4Icon />
                        {t('settings.dark')}
                    </Button>
                    <Button variant="contained" onClick={() => toggleTheme('light')}>
                        <Brightness7Icon />
                        {t('settings.light')}
                    </Button>
                </Box>
            </Box>
        </Paper>
    )
}