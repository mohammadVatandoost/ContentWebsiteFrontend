import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import RouterCom from './RouterCom';
import logo from './logo.svg';
import './App.css';


class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         authAdmin: false,
    //         token: ''
    //     };
    //     console.log('constructor authAdmin : ' + this.state.authAdmin);
    // }
    // authAdmin = (token) => {
        // localStorage.setItem('token',token);
        // console.log('authenticateAdmin');
        // console.log(token);
        // this.setState({authAdmin: true,token: token});
        // console.log('authAdmin : ' + this.state.authAdmin);
    // }
  render() {
    return (
     <BrowserRouter basename="/">
       <RouterCom/>
     </BrowserRouter>
    );
  }
}

export default App;

{/*<BrowserRouter basename="/">*/}
    {/*<RouterCom isAuthenticate={this.state.authAdmin} authenticateAdmin={this.authAdmin} />*/}
{/*</BrowserRouter>*/}