import axios from "axios"
import { User } from "../types/api/user";
import { useCallback, useState } from "react";
import { useHistory } from "react-router";
import { useMessage } from "./useMessage";

export const useAuth = () => {
    const history = useHistory();

    const [loading, setLoading] = useState(false);

    const { showMessage } = useMessage();

    const login = useCallback((id: string) => {
        setLoading(true);
        axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
            if (res.data) {
                showMessage({ title: "login", status: "success"});
                history.push("/home");
            } else {
                showMessage({ title: "not found user", status: "error"});
            }
        })
        .catch(() => 
        showMessage({ title: "failed to login", status: "error"}))
        .finally(() => setLoading(false));
    }, [history]);
    return { login, loading };
};
