import React, {FC, useEffect, useState} from 'react';
import {ITodo, IUser} from "../types/types";
import axios from "axios";
import List from "./List";
import UserItem from "./UserItem";

const UserPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetchUsers()
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
    return (
        <div>
            <List items={users} renderItem={(user:IUser) =>
                <UserItem user={user} key={user.id}/>
            }/>
        </div>
    );
};

export default UserPage;