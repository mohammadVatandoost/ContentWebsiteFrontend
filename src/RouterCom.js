import React, { Component } from 'react';
import { Route , Switch } from 'react-router-dom';
import AuxWrapper from './components/AuxWrapper/AuxWrapper';
import HeaderCom from './components/HeaderCom/HeaderCom';
import FooterCom from './components/FooterCom/FooterCom';
import Main from './components/Main';
import Conversions from './components/Conversions/Conversions';
import AdminControlPanel from './components/AdminControlPanel/AdminControlPanel';
import AdminLogIn from './components/AdminControlPanel/AdminLogIn/AdminLogIn';
import ContentManagerPanel from './components/ContentManagerPanel/ContentManagerPanel';
import ContentManagerLogin from './components/ContentManagerPanel/ContentManagerLogin/ContentManagerLogin';

class RouterCom extends Component {
    render() {
        return (
          <AuxWrapper>
            <HeaderCom/>
            <main>
             <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/online-conversion-calculator" component={Conversions}/>
                <Route path="/AdminLogIn" component={AdminLogIn}/>
                <Route path="/AdminControlPanel" component={AdminControlPanel}/>
                <Route path="/ContentManagerPanel" component={ContentManagerPanel}/>
                <Route path="/ContentManagerLogin" component={ContentManagerLogin}/>
             </Switch>
            </main>
            <FooterCom/>
          </AuxWrapper>
        )
    }
};

export default RouterCom;

// {this.state.authAdmin ? <Route path="/AddPart" exact component={AddPartCom}/> : null }
// <PrivateRoute isAuthenticate={this.state.authAdmin} exact path="/AddPart" component={AddPartCom} />
//  <Route path="/AdminLogin" exact component={() => (<LoginCom authenticateAdmin={this.props.authenticateAdmin}  />)}/>
//  <PrivateRoute exact path="/AddPart" component={AddPartCom} />

// constructor(props) {
//     super(props);
//     this.state = {
//         authAdmin: false,
//         token: ''
//     };
//     console.log('constructor authAdmin : ' + this.state.authAdmin);
// }    isAuthenticate={this.props.isAuthenticate}

