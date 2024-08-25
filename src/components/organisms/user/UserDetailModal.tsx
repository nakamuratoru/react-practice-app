import { memo, VFC } from "react";
import { Box, Image, Stack, Text , Modal, ModalBody, ModalContent, FormControl, ModalHeader, ModalOverlay, FormLabel, Input, ModalCloseButton} from "@chakra-ui/react";


type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
    const { isOpen, onClose } = props;
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
                            <Input value="sample" isReadOnly />
                        </FormControl>
                        <FormControl>
                            <FormLabel>full name</FormLabel>
                            <Input value="sample" isReadOnly />
                        </FormControl>
                        <FormControl>
                            <FormLabel>mail</FormLabel>
                            <Input value="sample" isReadOnly />
                        </FormControl>
                        <FormControl>
                            <FormLabel>TEL</FormLabel>
                            <Input value="sample" isReadOnly />
                        </FormControl>
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
});