import { useEffect, useState } from "react";

const UseEffect = () => {
    const [randomNumber, setRandomNumber] = useState(0);
    const [effectLogs, setEffectLogs] = useState([]);

    useEffect(() => {
        setEffectLogs((prevEffectLogs) => [
            ...prevEffectLogs,
            "effect fn has been invoked",
        ]);
    }, [randomNumber]);

    return (
        <div>
            <h1>{randomNumber}</h1>
            <button
                onClick={() => {
                    setRandomNumber(Math.random());
                }}
            >
                Generate random number!
            </button>
            <div>
                {effectLogs.map((effect, index) => (
                    <div key={index}>{"🍔".repeat(index) + effect}</div>
                ))}
            </div>
        </div>
    );
};

export default UseEffect;
