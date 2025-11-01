import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

export default function Landing(){
    return (
        <>
            <Box component="section" sx={{ p: 4, border: '1px solid grey', borderRadius: 4}}>
                <Typography variant="h4" sx={{ marginBottom: 4 }}>Welcome to SportCRM</Typography>
                <Link to={'/auth/sign-in'}>
                    <Button variant="contained" sx={{ color: 'white' }}>
                        Login
                    </Button>     
                </Link>
            </Box>
        </>
    )
}