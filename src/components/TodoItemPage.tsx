import React, {FC, useEffect, useState} from 'react';
import {ITodo} from "../types/types";
import axios from "axios";

const TodoItemPage:FC = () => {
    const [todo, setTodos] = useState<ITodo[]>([])
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
            
        </div>
    );
};

export default TodoItemPage;