import { VFC, memo, useCallback } from "react";
import { Box, Flex, Heading, Link, useDisclosure} from "@chakra-ui/react";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";
import { useHistory } from "react-router";

export const Header: VFC = memo(() => {
    
    const { isOpen, onOpen, onClose } = useDisclosure();
    const history = useHistory();

    const onClickHome = useCallback(() => history.push("/home"), []);
    const onClickUserManagement = useCallback(() => history.push("/home/user_management"), []);
    const onClickSetting = useCallback(() => history.push("/home/setting"), []);

    return (
        <>
        <Flex 
            as="nav" 
            bg="teal.500" 
            color="gray.50" 
            align="center" 
            justify="space-between" 
            padding={{ base: 3, md: 5 }}
        >
            <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer"}} onClick={onClickHome}>
                <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
                    UserManagementApp
                </Heading> 
            </Flex>
            
            <Flex align="center" mr={8} fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex" }}>
                <Box pr={4}>
                <Link onClick={onClickUserManagement}>UserList</Link>
                </Box>
                <Link onClick={onClickSetting}>Setting</Link>
            </Flex>
            <MenuIconButton onOpen={onOpen} />
        </Flex>
        <MenuDrawer 
            onClose={onClose} 
            isOpen={isOpen} 
            onClickHome={onClickHome} 
            onClickUserManagement={onClickUserManagement} 
            onClickSetting={onClickSetting}/>
        </>
    );
});