import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector} from "../redux-app/hooks.ts";
import { logout } from "../redux-app/auth/authSlice.ts";
import { menuItems } from "../constants/menuItems.ts";

import MenuIcon from '@mui/icons-material/Menu';

export default function LeftSideBar(){
    const [isClose, setIsClose] = useState(false);
    const [mobileOpened, setMobileOpened] = useState(false);
    const dispatch = useAppDispatch();
    const authData = useAppSelector(state => state.auth);
    const {t} = useTranslation();

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

    const handleLogout = () => {
        dispatch(logout())
    }

    const drawer = (
        <Box>
            <Toolbar>
                <Typography variant="h6" component={'div'}>
                    {`${t('greeting')} ${authData.user?.firstName || 'Anonymous'}`}
                </Typography>
            </Toolbar>
            <Divider/>
            <List>
                {menuItems.map((item) => (
                    <Link to={item.text.toLowerCase()} key={item.text} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ListItem disablePadding onClick={drawerClose}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <item.icon />
                                </ListItemIcon>
                                <ListItemText primary={item.text}/>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Box>
    )

    return (
        <>
            <Drawer
                open={isClose || !mobileOpened}
                onClose={drawerToggle(false)}
                variant={mobileOpened ? "temporary" : "permanent"}
                sx={{
                    minWidth: 250,
                }}
            >
                {drawer}
                <Button variant="contained" onClick={handleLogout} sx={{ width: '50%', alignSelf: 'center'}}>
                    {t('logout')}
                </Button>
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