import { SocketType } from "dgram";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import { isEqual } from "lodash";
import { Box, Input, Button, HStack } from "@chakra-ui/react";

const Room = () => {
    const params = useParams();
    const socketRef = useRef<any>(null);
    const [messages, setMessages] = useState<any>([]);

    useEffect(() => {
        socketRef.current = io("http://localhost:4444");

        socketRef.current.emit("room:join", params.id);

        socketRef.current.on("messages:getAll", (newMessages: any) => {
            if (!isEqual(messages, newMessages)) {
                setMessages(newMessages);
            }
        });
    });

    console.log(messages);

    return (
        <Box position={"relative"} h={"100vh"} py="100px">
            {messages?.map((message: any) => {
                console.log(message);
                return <h1>{message}</h1>;
            })}
            <HStack position={"fixed"} py={"10px"} bottom={"0"}>
                <Input type="text"></Input>
                <Button>Отправить</Button>
            </HStack>
        </Box>
    );
};

export default Room;
