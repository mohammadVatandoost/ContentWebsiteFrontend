import React , {Component} from 'react';
import axios from 'axios';
import { NavLink , Route , Switch } from 'react-router-dom';
import LoginCom from '../../LoginCom/LoginCom';
class AdminLogIn extends Component {
    render() {
        return (
            <div className="container">
                <br/>
                <br/>
                <LoginCom/>
                <br/>
                <br/>
            </div>
        )
    }
}

export default AdminLogIn;