import { ReactNode, createContext, useState } from "react";
import { User, UserContextInterface } from "../types/user-context.types";

const defaultState = {
    user: {
        name: '',
        password: ''
    },
    setUser: (user: User) => {}
} as UserContextInterface
export const UserContext = createContext<UserContextInterface>(defaultState);

type UserProvideProps = {
    children: ReactNode
}

export default function UserProvider({children}:UserProvideProps) {
    const [user, setUser] = useState<User>({
        name: '',
        password: '',
    });
    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
} 