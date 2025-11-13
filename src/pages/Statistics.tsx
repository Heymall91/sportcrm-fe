import { Paper } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Statistics(){
    const {t} = useTranslation();

    return(
        <>
            <Paper sx={{ flexGrow: 1, p: 3, margin: 3 }}>
                {t('leftSideBar.statistics')}
            </Paper>
        </>
    )
}