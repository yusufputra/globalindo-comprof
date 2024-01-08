import { useState } from "react";
import { Link, Box, Flex, Text, Stack, FlexProps } from "@chakra-ui/react";
import { ReactNode } from 'react';
import { Logo } from "../assets/svg/Logo";
import { LayoutContainer } from "./LayoutContainer";
import { Button } from "./common/Button";

const NavBar = (props: FlexProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <NavBarContainer {...props}>
            <Logo />
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <Flex flexDir='row' gap={10} display={{ base: 'none', md: 'flex' }}>
                <MenuList />
            </Flex>
            <Box display={{ base: 'none', md: 'flex' }}>
                <RegisterButton />
            </Box>
            <MenuLinks isOpen={isOpen} />
        </NavBarContainer>
    );
};

const CloseIcon = () => (
    <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <title>Close</title>
        <path
            fill="black"
            d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
        />
    </svg>
);

const MenuIcon = () => (
    <svg
        width="24px"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        fill="black"
    >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
);

const MenuToggle = ({ toggle, isOpen }: { toggle: () => void, isOpen: boolean }) => {
    return (
        <Box display={{ base: "block", md: "none" }} onClick={toggle}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
        </Box>
    );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }: { children: ReactNode, isLast?: boolean, to?: string }) => {
    return (
        <Link href={to}>
            <Text display="block" {...rest}>
                {children}
            </Text>
        </Link>
    );
};

const RegisterButton = () => {
    return <MenuItem to="/signup" isLast>
        <Button>
            Book A Call
        </Button>
    </MenuItem>
}

const MenuList = () => {
    return <>
        <MenuItem to="#">How It works</MenuItem>
        <MenuItem to="#">Our Work</MenuItem>
        <MenuItem to="#">Pricing</MenuItem>
        <MenuItem to="#">About Us</MenuItem>
    </>
}

const MenuLinks = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <Box
            display={{ base: isOpen ? "block" : "none" }}
            flexBasis={{ base: "100%", md: "auto" }}
        >
            <Stack
                spacing={8}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "column", "row", "row"]}
                pt={[4, 4, 0, 0]}
            >
                <MenuList />
                <RegisterButton />
            </Stack>
        </Box>
    );
};



const NavBarContainer = ({ children, ...props }: FlexProps & { children: ReactNode }) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            p={5}
            position='fixed'
            bg='white'
            zIndex={1000}
            top={0}
            justifyContent='center'
            {...props}
        >
            <LayoutContainer>
                <Flex
                    align="center"
                    justify="space-between"
                    wrap="wrap"
                    w="100%"
                >
                    {children}
                </Flex>
            </LayoutContainer>

        </Flex>
    );
};

export { NavBar };