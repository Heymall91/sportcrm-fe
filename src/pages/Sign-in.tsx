import { Box, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function SignIn() {
    return (
        <>
            <Box component="section" sx={{ display: 'flex', flexDirection: 'column', gap: '20px', p: 4, border: '1px solid grey', borderRadius: 4, minWidth: '262px'}}>
                <Typography variant="h4" component="h2" sx={{fontWeight: 600}}>Sign in</Typography>
                <TextField placeholder="Your name" size="small"/>
                <TextField placeholder="Your password" size="small"/>
                <Typography paragraph sx={{ marginBottom: 0 }}>Haven't account yet? <Link to={'/auth/sign-up'}> Create one</Link></Typography>
                <Button variant="contained" sx={{ color: 'white' }}>Log in</Button>
            </Box>
        </>
    )
}