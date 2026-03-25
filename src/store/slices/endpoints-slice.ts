import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Endpoint {
    id: string,
    method: string,
    path: string,
    status: number,
    response: string
}

const initialState: Array<Endpoint> = []

export const endpointsSlice = createSlice({
    name: "endpoints",
    initialState,
    reducers: {
        addEndpoint: (state, action: PayloadAction<Omit<Endpoint, "id">>) => {
            state.push({...action.payload, id: nanoid()})
        }
    }
})

export default endpointsSlice.reducer
