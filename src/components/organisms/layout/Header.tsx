import { VFC, memo } from "react";
import { Box, Flex, Heading, Link, useDisclosure} from "@chakra-ui/react";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
    
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
        <Flex 
            as="nav" 
            bg="teal.500" 
            color="gray.50" 
            align="center" 
            justify="space-between" 
            padding={{ base: "md", md: "lg" }}
        >
            <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
                UserManagementApp
            </Heading> 
            <Flex align="center" as="a" mr={8} fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex" }}>
                <Box pr={4}>
                <Link>UserList</Link>
                </Box>
            </Flex>
            <MenuIconButton onOpen={onOpen} />
        </Flex>
        <MenuDrawer onClose={onClose} isOpen={isOpen}/>
        </>
    );
});