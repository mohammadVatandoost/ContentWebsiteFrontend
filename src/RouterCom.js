import React, { Component } from 'react';
import { Route , Switch, withRouter } from 'react-router-dom';
import * as actions from './store/actions/index';
import {connect} from 'react-redux';
import AuxWrapper from './components/AuxWrapper/AuxWrapper';
import HeaderCom from './components/HeaderCom/HeaderCom';
import FooterCom from './components/FooterCom/FooterCom';
import Main from './components/Main';
import Conversions from './components/Conversions/Conversions';
import AdminControlPanel from './components/AdminControlPanel/AdminControlPanel';
import AdminLogIn from './components/AdminControlPanel/AdminLogIn/AdminLogIn';
import ContentManagerPanel from './components/ContentManagerPanel/ContentManagerPanel';
import ContentManagerLogin from './components/ContentManagerPanel/ContentManagerLogin/ContentManagerLogin';
import Signup from './components/User/Signup/Signup';
import ContentDetail from './components/Content/ContentDetail/ContentDetail';
import Forum from './components/Forum/Forum';
import Tutorials from './components/Tutorials/Tutorials';
import Login from './components/User/Login/Login';
import ECommerce from './components/ECommerce/ECommerce';
import My404Component from './components/My404Component/My404Component';
import Logout from './components/User/Logout/Logout';
import Alert from 'react-s-alert';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import 'react-s-alert/dist/s-alert-default.css';
// optional - you can choose the effect you want
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';

class RouterCom extends Component {

    componentDidMount() {
        // this.props.checkAuthState();
    }

    render() {
        // let privateRoute = null;
        // console.log("userRole : ");
        // console.log(this.props.userRole);
        // if(this.props.isAuthenticated) {
        //       if (this.props.userRole === "admin") {
        //           privateRoute = (
        //               <Route path="/AdminControlPanel" component={AdminControlPanel}/>
        //           );
        //       } else if (this.props.userRole === "cm") {
        //           privateRoute = (
        //               <Route path="/ContentManagerPanel" component={ContentManagerPanel}/>
        //           );
        //       }
        // }
        return (
          <AuxWrapper>
            <HeaderCom/>
            <main>
                <Alert stack={{limit: 3}} />
             <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/online-conversion-calculator" component={Conversions}/>
                <Route path="/AdminLogIn" component={AdminLogIn}/>
                <Route path="/ContentManagerLogin" component={ContentManagerLogin}/>
                <Route path="/Signup" component={Signup}/>
                <Route path="/Login" component={Login}/>
                <Route path="/Logout" component={Logout}/>
                <Route path="/articles/felan" component={ContentDetail}/>
                <Route path="/Forum" component={Forum}/>
                <Route path="/Tutorials" component={Tutorials}/>
                <Route path="/ECommerce" component={ECommerce}/>
                <PrivateRoute path="/ContentManagerPanel" userRole="cm" redirectPath="/" component={ContentManagerPanel} />
                <PrivateRoute path="/AdminControlPanel" userRole="admin" redirectPath="/" component={AdminControlPanel} />
                <Route path="*" exact={true} component={My404Component} />
             </Switch>
            </main>
            <FooterCom/>
          </AuxWrapper>
        )
    }
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        userRole: state.auth.userRole
    };
};

const mapDispatchToProps = dispatch => {
    return {
        checkAuthState: () => dispatch( actions.authCheckState() )
    };
};


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(RouterCom));

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

