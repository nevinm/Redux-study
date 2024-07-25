import { useState, useContext } from "react"
import { ThemeSwitcher } from "./ThemeSwitcher"
import { ThemeContext } from "../context/ThemeProvider"
const initialTodos = [
    {
        title: "Laundry",
        done: false,
        isEditing: false,
        id: Date.now() + 1
    },
    {
        title: "Reading",
        done: false,
        isEditing: false,
        id: Date.now() + 2
    },
    {
        title: "Cooking",
        done: false,
        isEditing: false,
        id: Date.now() + 3
    }
]

export const Todo = () => {
    const [todos, setTodos] = useState(initialTodos)
    const { theme } = useContext(ThemeContext);

    const handleInputChange = (e, todo) => {
        const { id } = todo
        console.log(e.target.value)
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo, title: e.target.value
                }
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    const handleEditButton = (id) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, isEditing: !todo.isEditing };
            }
            return todo;
        });

        setTodos(updatedTodos);
    };

    const handleSaveButton = (id) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isEditing: !todo.isEditing
                }
            }

            return todo
        })
        console.log('updatedTodos', updatedTodos)

        setTodos(updatedTodos)
    }

    const handleCreateNewTodo = () => {
        const newTodo = {
            title: "New Todo",
            done: false,
            isEditing: true,
            id: Date.now() + todos.length
        };
        setTodos([...todos, newTodo]);
    };

    return (
        <div className={`app ${theme}`}>
            <h3>
                Todo app
            </h3>
            <div className="todo-container">
                <ul className="todo-list">
                    {todos?.map((todo) => {
                        const { done, isEditing, id, title } = todo

                        return (
                            <div key={id} className="todo-list-container">
                                <input type="checkbox" defaultChecked={done} />
                                <li className="todo-item">
                                    {isEditing ?
                                        <input type="text" onChange={(e) => handleInputChange(e, todo)} value={title} /> :
                                        <h3>{title}</h3>
                                    }
                                    {isEditing ?
                                        <button onClick={() => handleSaveButton(id)}>Save</button> :
                                        <button onClick={() => handleEditButton(id)}>Edit</button>}
                                </li>

                            </div>)
                    })}
                </ul>
                <button onClick={handleCreateNewTodo}>Create new todo</button>
            </div>

        </div>
    )
}