import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IAuth {
    user: null | {
        id: string;
        firstName: string;
        email: string;
    };
    token: string | null;
    isAuthenticated: boolean;
}

const initialState: IAuth = {
    user: null,
    token: localStorage.getItem('token'),
    isAuthenticated: !!localStorage.getItem('token'),
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setTokenAuth: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
            state.isAuthenticated = true;
            localStorage.setItem('token', action.payload)
        },
        clearToken: (state) => {
            state.token = null;
            state.isAuthenticated = false;
            localStorage.removeItem("token");
        },
        logout: (state) => {
            console.log('Logout action triggered');
            state.token = null;
            state.isAuthenticated = false; 
            localStorage.removeItem("token");
        }
    }
})

export const {setTokenAuth, clearToken, logout} = authSlice.actions;