import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Avatar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import { menuItems } from "../constants/menuItems.ts";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";


import MenuIcon from '@mui/icons-material/Menu';
import { ROUTES } from "../routes.ts";

export default function LeftSideBar(){
    const [isClose, setIsClose] = useState(false);
    const [mobileOpened, setMobileOpened] = useState(false);
    const {t} = useTranslation();
    const { logout, user } = useAuth0();
    const navigate = useNavigate();
    const drawerClose = () => {
        setIsClose(true);
        setMobileOpened(false)
    }

    const drawerToggle = (newOpen: boolean) => () => {
        const active = document.activeElement as HTMLElement | null;
        if(active){
            active.blur();
        }
        setIsClose(newOpen);
    }

    const settings = () => {
        window.location.href = ROUTES.PRIVATE.SETTINGS 
    }

    const handleLogout = () => {
        logout({
            logoutParams: {returnTo: window.location.origin}
        })
        navigate('/')
    };

    const drawer = (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Toolbar>
                <Typography variant="h6" component={'div'} display={'flex'} alignItems={'center'} gap={2}>
                    {`${user?.email || 'Anonymous'}`}
                    <Avatar alt="user avatar" src={user?.picture}/>
                </Typography>
            </Toolbar>
            <Divider/>
            <List>
                {menuItems.map((item) => (
                    <Link to={item.link} key={item.text} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ListItem disablePadding onClick={drawerClose}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <item.icon />
                                </ListItemIcon>
                                <ListItemText primary={t(item.text)}/>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Box sx={{display: "flex",  flexDirection: "column", alignItems: 'center', gap: '10px', mt: 'auto', p: 2}}>
                <Button variant="text" onClick={() => settings()} sx={{ width: '80%', justifyContent: 'space-around'}}>
                    <SettingsIcon/>
                    {t("leftSideBar.settings")}
                </Button>
                <Button variant="contained" onClick={() => handleLogout()} sx={{ width: '80%'}}>
                    {t('leftSideBar.logout')}
                </Button>
            </Box>
        </Box>
    )

    return (
        <>
            <Drawer
                open={isClose || !mobileOpened}
                onClose={drawerToggle(false)}
                variant={mobileOpened ? "temporary" : "permanent"}
                sx={{
                    minWidth: 250
                }}
            >
                {drawer}
            </Drawer>

            {mobileOpened && !open && (
                <IconButton
                    color="inherit"
                    onClick={() => setIsClose(true)}
                    sx={{
                        position: "fixed",
                        top: 16,
                        left: 16,
                    }}
                >
                    <MenuIcon />
                </IconButton>
            )}
        </>
    )
}