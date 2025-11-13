import { Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function Dashboard(){
    const {t} = useTranslation();

    return (
        <Paper sx={{ flexGrow: 1, p: 3, margin: 3 }}>
            {t('leftSideBar.dashboard')}
        </Paper>
    )
}