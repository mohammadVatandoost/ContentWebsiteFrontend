import React from 'react';
import Search from '../Search/Search';
import { NavLink } from 'react-router-dom';
import './HeaderTop.css';

const HeaderTop = (props) => (
    <div className="HeaderTop">
        <div className="flex-row flex-item-3 auth">
            <NavLink to="/Signup">ثبت نام</NavLink>
            <NavLink to="/Login">ورود</NavLink>
        </div>
       <Search/>
       <h1 className="flex-item-3 text-left">AriaElec</h1>
    </div>
);

export default HeaderTop;
