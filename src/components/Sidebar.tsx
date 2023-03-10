import React, { ReactNode } from "react";
import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    BoxProps,
    FlexProps,
    Button,
    Input,
} from "@chakra-ui/react";
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText, useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { getRooms } from "../redux/rooms/rooms";
import { Link } from "react-router-dom";

interface LinkItemProps {
    name: string;
}
const LinkItems: Array<LinkItemProps> = [{ name: "Общий" }];

export default function Sidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box
            position={"fixed"}
            top="0"
            left="0"
            minH="100vh"
            bg={useColorModeValue("gray.100", "gray.900")}
        >
            <SidebarContent
                onClose={() => onClose}
                display={{ base: "none", md: "block" }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
        </Box>
    );
}

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    const dispatch = useAppDispatch();
    const rooms = useAppSelector((state) => state.rooms.data);
    const [roomName, setRoomName] = useState("");

    useEffect(() => {
        dispatch(getRooms());
    }, []);

    return (
        <Box
            bg={useColorModeValue("white", "gray.900")}
            borderRight="1px"
            borderRightColor={useColorModeValue("gray.200", "gray.700")}
            w={{ base: "full", md: 60 }}
            pos="fixed"
            h="full"
            {...rest}
        >
            <Flex
                h="20"
                alignItems="center"
                mx="8"
                justifyContent="space-between"
            >
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    Messenger
                </Text>
                <CloseButton
                    display={{ base: "flex", md: "none" }}
                    onClick={onClose}
                />
            </Flex>
            {rooms?.map((room) => (
                <NavItem roomId={room._id} key={room._id}>
                    {room.name}
                </NavItem>
            ))}

            <Box p={7}>
                <Input
                    value={roomName}
                    onChange={(e) => {
                        setRoomName(e.target.value);
                    }}
                    type="text"
                    placeholder="название комнаты"
                    mb={"10px"}
                ></Input>
                <Button w="100%">Создать комнату</Button>
            </Box>
        </Box>
    );
};

interface NavItemProps extends FlexProps {
    children: ReactText;
    roomId: string;
}
const NavItem = ({ roomId, children, ...rest }: NavItemProps) => {
    return (
        <Link to={"/room/" + roomId} style={{ textDecoration: "none" }}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: "cyan.400",
                    color: "white",
                }}
                {...rest}
            >
                {children}
            </Flex>
        </Link>
    );
};

interface MobileProps extends FlexProps {
    onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 24 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue("white", "gray.900")}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue("gray.200", "gray.700")}
            justifyContent="flex-start"
            {...rest}
        >
            <IconButton
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                icon={<FiMenu />}
            />

            <Text
                fontSize="2xl"
                ml="8"
                fontFamily="monospace"
                fontWeight="bold"
            >
                Logo
            </Text>
        </Flex>
    );
};
