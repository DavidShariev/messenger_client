import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function Registration() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                    <Heading fontSize={"4xl"} textAlign={"center"}>
                        Зарегестрируйтесь
                    </Heading>
                    <Text fontSize={"lg"} color={"gray.600"}>
                        что бы собеседники могли вас узнать ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                >
                    <Stack spacing={4}>
                        <FormControl id="name" isRequired>
                            <FormLabel>Имя</FormLabel>
                            <Input type="text" />
                        </FormControl>

                        <FormControl id="email" isRequired>
                            <FormLabel>Почтовый адрес</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Пароль</FormLabel>
                            <InputGroup>
                                <Input
                                    type={showPassword ? "text" : "password"}
                                />
                                <InputRightElement h={"full"}>
                                    <Button
                                        variant={"ghost"}
                                        onClick={() =>
                                            setShowPassword(
                                                (showPassword) => !showPassword
                                            )
                                        }
                                    >
                                        {showPassword ? (
                                            <ViewIcon />
                                        ) : (
                                            <ViewOffIcon />
                                        )}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                                loadingText="Submitting"
                                size="lg"
                                bg={"blue.400"}
                                color={"white"}
                                _hover={{
                                    bg: "blue.500",
                                }}
                            >
                                Зарегестрироваться
                            </Button>
                        </Stack>
                        <Stack pt={2}>
                            <Text align={"center"}>
                                Уже есть аккаунт?{" "}
                                <Link to="/login" color={"blue.400"}>
                                    Авторизоваться
                                </Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}
