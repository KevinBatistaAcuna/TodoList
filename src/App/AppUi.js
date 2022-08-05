import React from "react";
import { TodoContext } from "../Components/TodoContext";
import { TodoCounter } from '../Components/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch';
import { CreateTodoButton } from '../Components/CreateButton';
import { TodoList } from '../Components/TodoList';
import { TodoItem } from '../Components/TodoItem';
import { Modal } from "../Components/Modal";
import { TodoForm } from "../Components/TodoForm";
import './App.css';

function AppUi(){
    const { 
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            
            <TodoList>
                {error && <p className="message">Error</p>}
                {loading && <img src="./Img/loader.gif" className="loader"/>}
                {(!loading && !searchedTodos.length) && <p className="message">Create your first ToDo item</p>}

                {searchedTodos.map(todo => (
                <TodoItem 
                    key={todo.item} 
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete = {() => deleteTodo(todo.text)}
                />
                ))}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButton 
                setOpenModal={setOpenModal}
            />
            
        </React.Fragment>
    );
}

export { AppUi }