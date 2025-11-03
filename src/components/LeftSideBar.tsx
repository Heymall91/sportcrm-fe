import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
// import { useAppDispatch, useAppSelector} from "../redux-app/hooks.ts";

export default function LeftSideBar(){
    const [isClose, setIsClose] = useState(false);
    const [mobileOpened, setMobileOpened] = useState(false);


    const drawlerClose = () => {
        setIsClose(true);
        setMobileOpened(false)
    }

    const drawler = (
        <Box>
            <Toolbar>
                <Typography variant="h6" component={'div'}>
                    
                </Typography>
            </Toolbar>
        </Box>
    )
}