import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import userReducer from "./user/user";

const store = configureStore({
    reducer: {
        user: userReducer
    },
});

type TState = ReturnType<typeof store.getState>;
type TDispatch = typeof store.dispatch;
export const useAppDispatch: () => TDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TState> = useSelector;
export default store;
