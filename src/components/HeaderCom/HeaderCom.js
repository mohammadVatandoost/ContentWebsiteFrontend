import React from 'react';
import HeaderTop from './HeaderTop/HeaderTop';
import Navigation from './Navigation/Navigation';
import Background from '../../assets/background.jpg';
import './HeaderCom.css';

const HeaderCom = (props) => (
    <header>
        <HeaderTop/>
        <Navigation/>
    </header>
);

export default HeaderCom;

// const styleCss = {
//     backgroundImage: url(${Background})
// };       <Navigation/>
