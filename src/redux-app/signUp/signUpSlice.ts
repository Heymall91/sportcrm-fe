import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface IGeneralInfo {
    firstName: string;
    lastName: string;
    phone: string;
}

interface IOrganizationInfo{
    organizationName: string;
}

interface IValidation{
    isGeneralValid: boolean;
    isOrganizationValid: boolean;
    isCredentialsValid: boolean;
}

interface ICredentials {
    email: string;
    password: string;
    confirmPassword: string;
}

export const initialState = {
    generalInfo: {
        firstName: "",
        lastName: "",
        phone: ""
    },
    organizationInfo: {
        organizationName: ""
    },
    credentials: {
        email: "",
        password: "",
        confirmPassword: ""
    },
    validation: {
        isGeneralValid: false,
        isOrganizationValid: false,
        isCredentialsValid: false
    }
}

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers:{
        setGeneralInfo: (state, action: PayloadAction<IGeneralInfo>) => {
            state.generalInfo = action.payload;
        },
        setOrganizationInfo: (state, action: PayloadAction<IOrganizationInfo>) => {
            state.organizationInfo = action.payload;
        },
        setValidation: (state, action: PayloadAction<IValidation>) => {
            state.validation = action.payload;
        },
        setCredentials: (state, action: PayloadAction<ICredentials>) => {
            state.credentials = action.payload;
        }
    }
});

export const {setGeneralInfo, setOrganizationInfo, setValidation, setCredentials} = registerSlice.actions;

export const selectRegister = (state: RootState) => state.register;