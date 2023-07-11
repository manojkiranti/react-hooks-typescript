import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

const UserDetail = () => {
    const {user, setUser} = useContext(UserContext)
    return (
        <>
            <div>Name: {user.name}</div> 
            <div>Password: {user.password}</div>
        </>
    )
}

export default UserDetail;