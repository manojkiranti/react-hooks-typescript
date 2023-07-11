import { useContext, useEffect } from "react";
import { UserContext } from "../../../contexts/UserContext";


const AnotherComponent = () => {
    const {user, setUser} = useContext(UserContext);

    useEffect(() => {
        setUser({
            name: "Manoj Rai",
            password:"password"
        })
    },[])
    return (
        <>Another Component</>
    )
}

export default AnotherComponent;
