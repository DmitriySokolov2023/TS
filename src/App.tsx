import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {ITodo, IUser} from "./types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";


function App() {
    
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path={'/users'} element={<UserPage/>}/>
                    <Route path={'/todos'} element={<TodosPage/>}/>
                    <Route path={'/users/:id'} element={<UserItemPage/>}/>
                    <Route path={'/todos/:id'} element={<TodoItemPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
