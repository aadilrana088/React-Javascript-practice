import { createContext, useState } from "react";
import Form from "./Form";
import { Button } from "./Panel";
import TaskCrud from "./taskCrud/TaskCrud";

export const ThemeContext = createContext(null);

export default function BetaApp() {
    const [theme, setTheme] = useState("dark");
    return (
        <>
            <ThemeContext.Provider value={theme}>
                <Form />
                <Button
                    onClick={() => {
                        theme === "dark" ? setTheme("light") : setTheme("dark");
                    }}
                >
                    Switch to light theme
                </Button>
            </ThemeContext.Provider>
            <TaskCrud />
        </>
    );
}
