import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface AuthBoxProps{
    title: string;
    children: ReactNode;
}

export default function AuthBox({title, children}: AuthBoxProps){
    return(
        <Box component="section" sx={{ display: 'flex', flexDirection: 'column', gap: '20px', p: 4, border: '1px solid grey', borderRadius: 4, minWidth: '262px'}}>
            <Typography variant="h4" component="h2" sx={{fontWeight: 600}}>{title}</Typography>
            {children}
        </Box>
    )
}