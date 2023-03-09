import { ReactNode } from "react";
import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Text,
} from "@chakra-ui/react";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/store";

const NavLink = ({
    children,
    href,
}: {
    children: ReactNode;
    href?: string;
}) => (
    <Link to={href || "#"}>
        <Text
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
            }}
        >
            {children}
        </Text>
    </Link>
);

export default function Header() {
    const state = useAppSelector((state) => state.user.data);
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box
                position="fixed"
                top="0"
                left="0"
                right="0"
                bg={useColorModeValue("gray.100", "gray.900")}
                px={4}
                pl="60"
            >
                <Flex h={16} alignItems={"center"} justifyContent={"flex-end"}>
                    <Flex alignItems={"center"}>
                        <Stack direction={"row"} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === "light" ? (
                                    <MoonIcon />
                                ) : (
                                    <SunIcon />
                                )}
                            </Button>

                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={"full"}
                                    variant={"link"}
                                    cursor={"pointer"}
                                    minW={0}
                                >
                                    <Avatar
                                        size={"sm"}
                                        src={
                                            "https://avatars.dicebear.com/api/male/username.svg"
                                        }
                                    />
                                </MenuButton>
                                <MenuList alignItems={"center"}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={"2xl"}
                                            src={
                                                "https://avatars.dicebear.com/api/male/username.svg"
                                            }
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>{state?.username}</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem>Профиль</MenuItem>
                                    <MenuItem>Выйти</MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}
