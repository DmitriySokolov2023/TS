import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {ITodo, IUser} from "./types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample";


function App() {
    const [users, setUsers] = useState<IUser[]>([])
    const [todos, setTodos] = useState<ITodo[]>([])
    useEffect(() => {
        fetchUsers()
        fetchTodos()
    }, []);

    async function fetchUsers(){
        try{
            const users = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(users.data)
        }
        catch (error){
            alert(error)
        }

    }
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
            {/*<Card width={'500px'} height={'200px'} variant={CardVariant.primary} onClick={(num)=>console.log(num)}>*/}
            {/*    <button>Кнопка</button>*/}
            {/*</Card>*/}
            <EventsExample/>
            <List items={users} renderItem={(user:IUser) =>
                <UserItem user={user} key={user.id}/>
            }/>
            {/*<List items={todos} renderItem={(todo:ITodo) =>*/}
            {/*    <TodoItem todo={todo} key={todo.id}/>*/}
            {/*}/>*/}
        </div>
    );
}

export default App;
