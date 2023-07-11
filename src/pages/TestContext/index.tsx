
import UserProvider from "../../contexts/UserContext";
import AnotherComponent from "./components/AnotherComponent";
import UserDetail from "./components/UserDetail";
const TestContext = () => {
    return (
        <UserProvider>
            <div className="pt-4">
                <UserDetail />
                <AnotherComponent />
            </div>            
        </UserProvider>
    )
}

export default TestContext;