import { useState } from "react";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchLogin } from "../../redux/user/user";
import { Navigate } from "react-router-dom";

export default function Login() {
    const state = useAppSelector((state) => state.user.data);
    const dispatch = useAppDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = () => {
        dispatch(
            fetchLogin({
                email,
                password,
            })
        );
    };

    return (
        <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            {state ? <Navigate to="/"></Navigate> : null}
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                    <Heading fontSize={"4xl"}>Авторизоваться</Heading>
                    <Text fontSize={"lg"} color={"gray.600"}>
                        и используйте полный{" "}
                        <Link color={"blue.400"}>функционал</Link> ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                >
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Почтовый адрес</FormLabel>
                            <Input
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Пароль</FormLabel>
                            <Input
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </FormControl>
                        <Button
                            bg={"blue.400"}
                            color={"white"}
                            _hover={{
                                bg: "blue.500",
                            }}
                            onClick={() => {
                                submit();
                            }}
                        >
                            Авторизоваться
                        </Button>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}
