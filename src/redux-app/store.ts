// import { }

import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { registerSlice } from "./signUp/signUpSlice";
// api
import { usersApi } from "./api/users-api";
import { clubApi } from "./api/club-api";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        register: registerSlice.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [clubApi.reducerPath]: clubApi.reducer
    },
    middleware: (getDefaultsMiddleware) => getDefaultsMiddleware()
    .concat(usersApi.middleware)
    .concat(clubApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;