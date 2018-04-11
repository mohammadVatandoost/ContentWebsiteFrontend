import React from 'react';
import Search from '../Search/Search';
import './HeaderTop.css';

const HeaderTop = (props) => (
    <div className="HeaderTop">
       <Search/>
       <h1 className="float-left">AriaElec</h1>
    </div>
);

export default HeaderTop;
