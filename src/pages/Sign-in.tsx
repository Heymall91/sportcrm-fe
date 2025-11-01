import { Box, Typography, TextField, Button } from "@mui/material";

export default function SignIn() {
    return (
        <>
            <Box component="section" sx={{ display: 'flex', flexDirection: 'column', gap: '25px', p: 4, border: '1px solid grey', borderRadius: 4}}>
                <Typography variant="h4" component="h2" sx={{fontWeight: 600}}>Sign in</Typography>
                <TextField placeholder="Your name" />
                <TextField placeholder="Your password" />
                <Button variant="contained" sx={{ color: 'white' }}>Log in</Button>
            </Box>
        </>
    )
}