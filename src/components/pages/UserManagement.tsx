import { Center, ModalContent, Spinner, useDisclosure, Wrap, WrapItem, ModalOverlay, Modal, ModalHeader, ModalCloseButton, ModalBody, Stack, FormLabel, FormControl, Input } from "@chakra-ui/react";
import { VFC, memo, useEffect, useCallback } from "react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

export const UserManagement: VFC = memo(() => {
    const { getUsers, users, loading } = useAllUsers();

    const { isOpen, onClose, onOpen } = useDisclosure();

    const onClickUser = useCallback(() => onOpen(), []);

    useEffect(() => getUsers(), [])
    return (
        <>
        {loading ? (<Center h="100vh">
            <Spinner />
            </Center>) : 
            (
                <Wrap p={{base: 4, md: 10 }}>
                    {users.map((user) => (
                        <WrapItem key={user.id} mx="auto">
                            <UserCard 
                            onClick={onClickUser}
                            imageUrl="https://media.istockphoto.com/id/1298209419/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E6%9F%B4%E7%8A%AC%E7%8A%AC%E3%83%9A%E3%83%83%E3%83%88-%E3%82%A2%E3%82%A6%E3%83%88%E3%83%89%E3%82%A2%E3%82%B9%E3%83%9E%E3%82%A4%E3%83%AA%E3%83%BC%E3%81%AE%E9%A1%94%E3%82%92%E3%82%AF%E3%83%AD%E3%83%BC%E3%82%BA%E3%82%A2%E3%83%83%E3%83%97.jpg?s=2048x2048&w=is&k=20&c=wFjEjIyRv2J3fjFqZ7pVOSPYf9LEhYQ8mqFpm5MmgPs=" userName={user.username} fullName={user.name}/>
                        </WrapItem>
                    ))}
                </Wrap>
            )
        }
        <UserDetailModal isOpen={isOpen} onClose={onClose} />
        </>
    )
});