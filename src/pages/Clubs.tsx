import { Paper } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Clubs(){
    const {t} = useTranslation();

    return(
        <>
            <Paper sx={{ flexGrow: 1, p: 3, margin: 3 }}>
                {t('leftSideBar.clubs')}
            </Paper>
        </>
    )
}