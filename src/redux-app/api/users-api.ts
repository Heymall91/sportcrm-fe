import { config } from '../../configs/config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { User } from '../types/user';
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';

let getAccessToken: (() => Promise<string>) | null = null;

export const setTokenGetter = (getter: () => Promise<string>) => {
    getAccessToken = getter;
};

const baseQuery = fetchBaseQuery({
    baseUrl: config.configApi.apiBaseUrl,
    credentials: 'include',
    prepareHeaders: async (headers) => {
        if (getAccessToken) {
            try {
                const token = await getAccessToken();
                if (token) {
                    headers.set('Authorization', `Bearer ${token}`);
                } else {
                    console.warn('Токен не получен');
                }
            } catch (error) {
                console.error('Ошибка получения токена:', error);
            }
        }
        else {
            console.warn('getAccessToken не инициализирован');
        }
        return headers;
    },
});

export const baseQueryWithAuth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError>
 = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
        console.error('Unauthorized - проверьте токен авторизации');
    }
    return result;
};

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: baseQueryWithAuth,
    tagTypes: ["Users"],
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => '/users',
            providesTags: ["Users"],
            transformResponse: (response: { data: User[]; message: string }) => {
            return response.data;
        }
        }),
        getUserById: builder.query<User, string>({
            query: (id) => `/users/${id}`
        }),
        createUser: builder.mutation({
            query: (user) => ({
                url: '/users',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['Users']
        }),
        updateUser: builder.mutation({
            query: ({id, data}) => ({
                url: `/users/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['Users']
            
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ["Users"]
        })
    })
})

export const { useCreateUserMutation, useGetUserByIdQuery, useGetUsersQuery, useUpdateUserMutation, useDeleteUserMutation } = usersApi;