import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
const Navigation = (props) => (
    <nav>
        <ul>
            <li><NavLink to="/" exact activeClassName="ActiveNav">فروشگاه</NavLink></li>
            <li><NavLink to="/Articles"  activeClassName="ActiveNav">مقاله ها</NavLink></li>
            <li><NavLink to="/DashBoard/EnteredInfo" activeClassName="ActiveNav">فیلم ها</NavLink></li>
            <li><NavLink to="/Tutorials" activeClassName="ActiveNav">آموزش ها</NavLink></li>
            <li><NavLink to="/DashBoard/EnteredInfo" activeClassName="ActiveNav">دیتاشیت ها</NavLink></li>
            <li><NavLink to="/DashBoard/EnteredInfo" activeClassName="ActiveNav">فوت پرینت ها</NavLink></li>
            <li><NavLink to="/online-conversion-calculator" activeClassName="ActiveNav">محاسبه تبدیل ها</NavLink></li>
            <li><NavLink to="/Forum" activeClassName="ActiveNav">فرم ها</NavLink></li>
        </ul>
    </nav>
);

export default Navigation;