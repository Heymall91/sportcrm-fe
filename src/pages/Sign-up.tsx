import { Link } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";

export default function SignUp() {
    return (
        <>
            <Box component="section" sx={{ display: 'flex', flexDirection: 'column', gap: '20px', p: 4, border: '1px solid grey', borderRadius: 4, minWidth: '262px'}}>
                <Typography variant="h4" component="h2" sx={{fontWeight: 600}}>Sign up</Typography>
                <TextField placeholder="Your name" size="small"/>
                <TextField placeholder="Your password" size="small"/>
                <Typography paragraph sx={{ marginBottom: 0 }}>Already signed up? <Link to={'/auth/sign-in'}> Log in</Link></Typography>
                <Button variant="contained" sx={{ color: 'white' }}>Create account</Button>
            </Box>
        </>
    )
}