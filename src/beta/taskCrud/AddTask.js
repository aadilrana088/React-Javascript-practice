import { useContext, useState } from "react";
import { TasksDispatchContext } from "./TasksContext";

export default function AddTask({ onAddTask }) {
    const dispatch = useContext(TasksDispatchContext);

    const [text, setText] = useState("");
    return (
        <>
            <input
                placeholder="Add task"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={() => {
                    setText("");
                    dispatch({
                        type: "added",
                        id: nextId++,
                        text: text,
                    });
                }}
            >
                Add
            </button>
        </>
    );
}

let nextId = 3;
