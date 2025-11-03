import { configApi } from '../../configApi';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '../store';
import type { IUserRes } from '../types/user';

export const usersApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: configApi.apiBaseUrl || '/api',
        credentials: 'include',
        prepareHeaders: (headers, {getState}) => {
            const token = (getState() as RootState).auth.token;
            if(token){
                headers.set('Authorization', `Bearer ${token}`)
            }

            return headers;
        }
    }),

    endpoints: (builder) => ({
        getUsers: builder.query<IUserRes[], void>({
            query: () => ({
                url: '/users',
                method: 'GET'
            })
        }),

        createUser: builder.mutation({
            query: (user) => ({
                url: '/users',
                method: 'POST',
                body: user
            })
        })
    })
})