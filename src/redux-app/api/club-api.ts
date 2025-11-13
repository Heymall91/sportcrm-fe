import { configApi } from "../../configs/configApi";
import { config } from '../../configs/config';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../store";
import type { IClubRes } from "../types/club";

export const clubApi = createApi({
    reducerPath: 'clubApi',
    baseQuery: fetchBaseQuery({
        baseUrl: config.configApi.apiBaseUrl,
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
        getClubs: builder.query<IClubRes[], void>({
            query: () => '/clubs',    
        }), 
        getClubById: builder.query<IClubRes, string>({
            query: (id) => `/clubs/${id}`,
        }),
        createClub: builder.mutation<IClubRes, Partial<IClubRes>>({
            query: (body) => ({
                url: '/clubs',
                method: 'POST',
                body
            }),
        }),
        updateClub: builder.mutation<IClubRes, {id: string, body: Partial<IClubRes>}>({
            query: ({id, body}) => ({
                url: `/clubs/${id}`,
                method: 'PATCH',
                body
            })
        }),
        deleteClub: builder.mutation<void, string>({
            query: (id) => ({
                url: `/clubs/${id}`,
                method: 'DELETE'
            })
        })
    })
})