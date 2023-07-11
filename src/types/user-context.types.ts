import { Dispatch, SetStateAction } from "react";

export type User = {
    name: string;
    password: string;
}

export interface UserContextInterface {
    user: User;
    setUser: Dispatch<SetStateAction<User>>
}

