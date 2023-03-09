import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux/es/exports";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLDivElement
);
root.render(
    <Provider store={store}>
        <ChakraProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ChakraProvider>
    </Provider>
);
