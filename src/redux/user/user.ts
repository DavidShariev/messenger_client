import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { create } from "domain";
import { axiosMain } from "../../Axios";
import { IState } from "./types";

export interface IFetchLoginParams {
    email: String;
    password: String;
}
export const fetchLogin = createAsyncThunk(
    "user/login",
    async (params: IFetchLoginParams) => {
        const data = await axiosMain("/user/login", {
            method: "POST",
            data: params,
        })
            .then((res) => {
                const { token, ...data } = res.data;
                console.log(data);
                localStorage.setItem("token", token);
                return data;
            })
            .catch((err) => {
                throw new Error(err);
            });
        return data;
    }
);

export const fetchAuth = createAsyncThunk(
    "user/auth",
    async () => {
        const token = localStorage.getItem("token");
        const data = await axiosMain("/user/auth", {
            headers: {
                Authorization: token
            }
        }).then((res) => {
            return res.data.userData
        }).catch((err) => {
            throw new Error(err);
        })
        return data
    }
)


const initialState: IState = {
    status: "null",
    data: null,
    error: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchLogin.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.data = action.payload;
            }).addCase(fetchLogin.pending, (state, action) => {
                state.status = "pending";
                state.data = null;
            }).addCase(fetchLogin.rejected, (state, action) => {
                state.status = "error";
            })
            .addCase(fetchAuth.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.data = action.payload;
            }).addCase(fetchAuth.pending, (state, action) => {
                state.status = "pending";
                state.data = null;
            }).addCase(fetchAuth.rejected, (state, action) => {
                state.status = "error";
            });
            
        },
});

export default userSlice.reducer;
