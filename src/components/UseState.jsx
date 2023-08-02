import React, { useState } from "react";

const UseState = () => {
    const [state, setState] = useState({ age: 19, siblingsNum: 4 });
    const handleClick = (val) => {
        console.log([val], state[val]);
        setState({
            ...state,
            [val]: state[val] + 1,
        });
    }
    const { age, siblingsNum } = state;

    return (
        <div>
            <p>Today I am {age} Years of Age</p>
            <p>I have {siblingsNum} siblings</p>

            <div>
                <button onClick={handleClick.bind(null, "age")}>
                    Get older!
                </button>
                <button onClick={handleClick.bind(null, "siblingsNum")}>
                    More siblings!
                </button>
            </div>
        </div>
    );
};

export default UseState;
