import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <Box>
            <Header />
            <Sidebar />
            <Box ml={{ base: 0, md: 60 }} p="4">
                <Outlet />
            </Box>
        </Box>
    );
};

export default Layout;
