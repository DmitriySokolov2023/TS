import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

const Navbar:FC = () => {
    return (
        <div>
            <NavLink to={'/'}>Домой</NavLink>
            <NavLink to={'/users'}>Пользователи</NavLink>
            <NavLink to={'/todos'}>Список дел</NavLink>
        </div>
    );
};

export default Navbar;