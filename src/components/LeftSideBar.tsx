import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector} from "../redux-app/hooks.ts";
import { setTokenAuth, logout } from "../redux-app/auth/authSlice.ts";

import MenuIcon from '@mui/icons-material/Menu';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import PaymentIcon from "@mui/icons-material/Payment";
import FlagIcon from '@mui/icons-material/Flag';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from "@mui/icons-material/LocationOn";

const menuItems = [
    {text: "Dashboard", icon: <DashboardIcon/>},
    {text: "Previous Event", icon: <FlagIcon/>},
    {text: "Lessons", icon: <AppRegistrationIcon/>},
    {text: "Pupils", icon: <PersonIcon/>},
    {text: "Statistics", icon: <BarChartIcon/>},
    {text: "Payments", icon: <PaymentIcon/>},
    {text: "Clubs", icon: <InventoryIcon/>},
    {text: "Locations", icon: <LocationOnIcon/>},
];

export default function LeftSideBar(){
    const [isClose, setIsClose] = useState(false);
    const [mobileOpened, setMobileOpened] = useState(false);
    const dispatch = useAppDispatch();
    const authData = useAppSelector(state => state.auth);
    const {t} = useTranslation();


    const drawlerClose = () => {
        setIsClose(true);
        setMobileOpened(false)
    }

    const handleLogout = () => {
        dispatch(logout())
    }

    const drawler = (
        <Box>
            <Toolbar>
                <Typography variant="h6" component={'div'}>
                    {`${t('greeting')} ${authData.user?.firstName || 'Anonymous'}`}
                </Typography>
            </Toolbar>
            <Divider/>
            <List>

            </List>
        </Box>
    )
}