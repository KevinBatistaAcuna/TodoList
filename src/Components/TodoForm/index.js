import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return(
        <form onSubmit={onSubmit}>
            <label>Add new ToDo</label>
            <textarea
                value= {newTodoValue}
                onChange= {onChange}
                placeholder="New ToDo"
            />
            
            <div className="TodoForm-buttonContainer">
                <button
                    className="TodoForm-button TodoForm-button--cancel"
                    type="button"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                    className="TodoForm-button TodoForm-button--add"
                    type="submit"
                >
                    Add ToDo
                </button>
            </div>
        </form>
    );
}

export {TodoForm};