import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosMain } from "../../Axios";
import { IState } from "./types";

export const getRooms = createAsyncThunk("rooms/get", async () => {
    const rooms = await axiosMain("/room/", {
        method: "GET",
    }).then((res) => {
        const rooms = res.data.data;
        return rooms;
    });
    console.log(rooms);
    return rooms;
});

const initialState: IState = {
    status: "null",
    data: null,
    error: null,
};

const rooms = createSlice({
    name: "rooms",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getRooms.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = "fulfilled";
            })
            .addCase(getRooms.pending, (state, action) => {
                state.data = null;
                state.status = "pending";
            })
            .addCase(getRooms.rejected, (state, action) => {
                state.data = null;
                state.status = "error";
                state.error = action.payload as string;
            });
    },
});

export default rooms.reducer;
