import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {useParams} from "react-router-dom";

type UserItemPageParams = {
    id:string
}
const UserItemPage:FC = () => {
    const [user, setUsers] = useState<IUser | null>(null)
    const params = useParams<UserItemPageParams>()


    useEffect(() => {
        fetchUsers()
    }, []);

    async function fetchUsers(){
        try{
            const users = await axios.get<IUser | null>('https://jsonplaceholder.typicode.com/users/'+params.id)
            setUsers(users.data)
        }
        catch (error){
            alert(error)
        }

    }
    return (
        <div>
            {user?.id}. {user?.name} {user?.email}
        </div>
    );
};

export default UserItemPage;