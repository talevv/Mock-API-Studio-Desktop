import { EndpointRow, Response } from "@/shared/types/endpoint"
import {createApi, fakeBaseQuery} from "@reduxjs/toolkit/query/react"

export const endpointsApi = createApi({
    reducerPath: "endpointsApi",
    baseQuery: fakeBaseQuery(),
    endpoints: (build) => ({
        getEndpoints: build.query<Array<EndpointRow>, void>({
            queryFn: async () => {
                const response: Response = await window.api.getEndpoints()
                if (response.success) {
                    return { data: response.data as Array<EndpointRow> }
                } else {
                    return { error: response.error || 'Unknown error' }
                }
            }
        })
    })
}) 

export const {useGetEndpointsQuery} = endpointsApi