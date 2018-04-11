import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
const Navigation = (props) => (
    <nav>
        <ul role="navigation">
            <li><NavLink to="/DashBoard/EnteredInfo" activeClassName="verticalListActive">مقاله ها</NavLink></li>
            <li><NavLink to="/DashBoard/EnteredInfo" activeClassName="verticalListActive">فیلم ها</NavLink></li>
            <li><NavLink to="/DashBoard/EnteredInfo" activeClassName="verticalListActive">آموزش ها</NavLink></li>
            <li><NavLink to="/DashBoard/EnteredInfo" activeClassName="verticalListActive">دیتاشیت ها</NavLink></li>
            <li><NavLink to="/DashBoard/EnteredInfo" activeClassName="verticalListActive">فوت پرینت ها</NavLink></li>
            <li><NavLink to="/online-conversion-calculator" activeClassName="verticalListActive">محاسبه تبدیل ها</NavLink></li>
        </ul>
    </nav>
);

export default Navigation;