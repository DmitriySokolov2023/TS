import React, {FC, useEffect, useState} from 'react';
import {ITodo, IUser} from "../types/types";
import TodoItem from "./TodoItem";
import List from "./List";
import axios from "axios";

const TodosPage:FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([])
    useEffect(() => {
        fetchTodos()
    }, []);

    async function fetchTodos(){
        try{
            const todo = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(todo.data)
        }
        catch (error){
            alert(error)
        }

    }
    return (
        <div>
            <List items={todos} renderItem={(todo:ITodo) =>
                <TodoItem todo={todo} key={todo.id}/>
            }/>
        </div>
    );
};

export default TodosPage;