// import { }

import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { usersApi } from "./api/users-api";


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultsMiddleware) => getDefaultsMiddleware()
    .concat(usersApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;