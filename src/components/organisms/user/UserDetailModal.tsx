import { memo, useState, VFC, useEffect} from "react";
import { Box, Image, Stack, Text , Modal, ModalBody, ModalContent, FormControl, ModalHeader, ModalOverlay, FormLabel, Input, ModalCloseButton, ModalFooter} from "@chakra-ui/react";
import { User } from "../../../types/api/user";
import { ChangeEvent } from "react";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";


type Props = {
    isOpen: boolean;
    onClose: () => void;
    user: User | null;
    isAdmin?: boolean;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
    const { isOpen, onClose, user, isAdmin } = props;

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        setUsername(user?.username ?? '')
        setName(user?.name ?? '')
        setEmail(user?.email ?? '')
        setPhone(user?.phone ?? '')
    }, [user])

    const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) =>
        setUsername(e.target.value);
    const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
        setName(e.target.value);
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value);
    const onChangePhone = (e: ChangeEvent<HTMLInputElement>) =>
        setPhone(e.target.value);

    const onClickUpdate = () => alert("update");

    return (
        <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
            <ModalOverlay />
            <ModalContent pb={6}>
                <ModalHeader>User Detail</ModalHeader>
                <ModalCloseButton />
                <ModalBody mx={4}>
                    <Stack spacing={4}>
                        <FormControl>
                            <FormLabel>name</FormLabel>
                            <Input value={username} isReadOnly={!isAdmin} onChange={onChangeUsername}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>full name</FormLabel>
                            <Input value={name} isReadOnly={!isAdmin} onChange={onChangeName}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>mail</FormLabel>
                            <Input value={email} isReadOnly={!isAdmin} onChange={onChangeEmail}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>TEL</FormLabel>
                            <Input value={phone} isReadOnly={!isAdmin} onChange={onChangePhone}/>
                        </FormControl>
                    </Stack>
                </ModalBody>
                {isAdmin && (<ModalFooter>
                    <PrimaryButton onClick={onClickUpdate}>Update</PrimaryButton>
                </ModalFooter>)}
            </ModalContent>
        </Modal>
    )
});