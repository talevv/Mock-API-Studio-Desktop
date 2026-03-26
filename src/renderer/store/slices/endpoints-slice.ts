import { Endpoint } from "@/renderer/shared/types/endpoint";
import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


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

export const {addEndpoint} = endpointsSlice.actions

export default endpointsSlice.reducer
