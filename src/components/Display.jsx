import React, { useContext } from "react";

const ThemeContext = React.createContext("light");

const Display = () => {
    const theme = useContext(ThemeContext);
    return (
        <div
            style={{
                background: theme === "dark" ? "black" : "papayawhip",
                color: theme === "dark" ? "white" : "palevioletred",
                width: "100%",
                minHeight: "200px",
            }}
        >
            {"The theme here is " + theme}
            <button onClick={() => theme === "dark" ? "light" : "dark" }>Toggle Theme</button>
        </div>
    );
};
export default Display
