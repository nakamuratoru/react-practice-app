import axios from "axios"
import { User } from "../types/api/user";
import { useCallback, useState } from "react";
import { useHistory } from "react-router";

export const useAuth = () => {
    const history = useHistory();

    const [loading, setLoading] = useState(false);

    const login = useCallback((id: string) => {
        setLoading(true);
        axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
            if (res.data) {
                history.push("/home");
            } else {
                alert("not found user");
            }
        })
        .catch(() => alert("failed to login"))
        .finally(() => setLoading(false));
    }, [history]);
    return { login, loading };
};
