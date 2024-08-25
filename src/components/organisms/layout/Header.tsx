import { VFC, memo } from "react";
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex, Heading, IconButton, Link, useDisclosure} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

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
            <IconButton 
                aria-label="menu" 
                icon={<HamburgerIcon />} 
                size="sm" 
                variant="unstyled" 
                display={{ base: "block", md: "none"}}
                onClick={onOpen}
            />
        </Flex>
        <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen} >
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerBody p={0} bg="gray.100">
                        <Button w="100%">TOP</Button>
                        <Button w="100%">UserList</Button>
                        <Button w="100%">Setting</Button>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
        </>
    );
});