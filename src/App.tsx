import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";

import { io } from "socket.io-client";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { fetchAuth } from "./redux/user/user";
import Room from "./pages/Room/Room";
import Rooms from "./redux/rooms/rooms";

const socket = io("http://localhost:4444");

const App = () => {
    const dispatch = useAppDispatch();
    const state = useAppSelector((state) => state.user);

    console.log(state);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            dispatch(fetchAuth());
        }
    }, []);

    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/room/:id" element={<Room />}></Route>
                </Route>
                <Route path="/registration" element={<Registration />}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </div>
    );
};

export default App;
