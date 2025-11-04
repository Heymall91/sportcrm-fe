import { configApi } from '../../configApi';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '../store';
import type { IUserRes } from '../types/user';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: configApi.apiBaseUrl,
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
            query: () => '/users'
        }),
        getUserById: builder.query<IUserRes, string>({
            query: (id) => `/users/${id}`
        }),
        createUser: builder.mutation({
            query: (user) => ({
                url: '/users',
                method: 'POST',
                body: user
            })
        }),
        updateUser: builder.mutation({
            query: ({id, body}) => ({
                url: `/users/${id}`,
                method: 'PATCH',
                body
            })
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'DELETE'
            })
        })
    })
})