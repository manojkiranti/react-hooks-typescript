import ClickIncrease from "./components/ClickIncrease";
import HoverIncrease from "./components/HoverIncrease";

const HOC = () => {
    return (
        <>
            <ClickIncrease />
            <div className="pt-3 pb-3"></div>
            <HoverIncrease />
        </>
    )
}

export default HOC;