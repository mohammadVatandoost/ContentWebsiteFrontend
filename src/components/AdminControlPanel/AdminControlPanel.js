import React , {Component} from 'react';
import axios from 'axios';
import { NavLink , Route , Switch } from 'react-router-dom';
import LoginCom from '../LoginCom/LoginCom';

class AdminControlPanel extends Component {
    render() {
        return (
            <div className="container">
              <br/>
              <h2>Add Content Manager</h2>
              <LoginCom/>
              <br/>
              <h2>Remove Content Manager</h2>
            </div>
        )
    }
}

export default AdminControlPanel;