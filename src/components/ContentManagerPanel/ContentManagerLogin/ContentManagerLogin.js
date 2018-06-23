import React , {Component} from 'react';
import axios from 'axios';
import { NavLink , Route , Switch } from 'react-router-dom';
import LoginCom from '../../LoginCom/LoginCom';

class ContentManagerLogin extends Component {
    render() {
        return (
            <div className="container">
                <br/>
                <h2>Content Manager Log in</h2>
                <LoginCom redirectTo="/ContentManagerPanel"/>
                <br/>
            </div>
        )
    }
}

export default ContentManagerLogin;