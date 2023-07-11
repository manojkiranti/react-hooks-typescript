import { useEffect, useState } from "react";

const TestWidthHeight = () => {

    const getCurrentDimension = () => {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        }
    };

    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension());
        }
        window.addEventListener('resize', updateDimension)
        return(() => {
            window.removeEventListener('resize', updateDimension)
        })
    },[]);

    return (
        <>
            <div className="mt-3">
                <h2>Window Width and Height</h2>
                <h6>Width: {screenSize.width}</h6>
                <h6>Height: {screenSize.height}</h6>
            </div>
            
        </>
    );
};

export default TestWidthHeight;