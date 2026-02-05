import { useState, useEffect } from "react";
import { CircularProgress, Box } from "@mui/material";
import { ROUTES } from '../routes.ts';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useCreateUserMutation } from "../redux-app/api/users-api.ts";


export default function Callback(){
    const { isLoading: authLoading, isAuthenticated, user } = useAuth0();
    const navigate = useNavigate();
    const [createUser, {isLoading: creatingUser}] = useCreateUserMutation();
    const [isProcessing, setIsProcessing] = useState(true);
    const userCreate = async () => {
            if(authLoading) return;

            if(!user || !isAuthenticated){
                navigate(ROUTES.PUBLIC.ROOT);
                return;
            }

            const createdUser = {
                auth0Id: user.sub,
                firstName: user.given_name,
                lastName: user.family_name,
                email: user.email,
                phone: user.phone_number,
                isRegistrationCompleted: true,
                birthday: user.birthdate ?? null,
                gender: user.gender ?? null,
                weight: null,
                height: null
            }

            try{
                await createUser(createdUser).unwrap();
                navigate(ROUTES.PRIVATE.DASHBOARD);
            } catch (error) {
                console.error('Error creating user:', error);
                navigate(ROUTES.PUBLIC.ROOT);
            } finally{
                setIsProcessing(false);
            }
    };

    useEffect(() => {
        userCreate();
    }, [user, authLoading, isAuthenticated, createUser, navigate]);

    const loading = authLoading || creatingUser || isProcessing;

    if(loading){
        return (
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100vh'}>
                <CircularProgress size={50} />
            </Box>
        )
    }   
}