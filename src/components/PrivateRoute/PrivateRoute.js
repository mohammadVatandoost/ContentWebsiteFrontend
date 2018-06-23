import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
        props.userRole === props.role
            ? <Component {...props} />
            : <Redirect to={{pathname: props.redirectPath}}/>
    )}/>
  )
}

const mapStateToProps = state => ({
    userRole: state.auth.userRole
});

export default connect(mapStateToProps,null)(PrivateRoute);

//
// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={(props) => (
//         true === true
//             ? <Component {...props} />
//             : <Redirect to={{ pathname: '/AdminLogin' }} />
//     )} />
// )

// class PrivateRoute extends Component {
//     render() {
//         let isAuthenticated = this.props.location.state.isAuthenticate ;
//         // if() {
//         //     isAuthenticated = true ;
//         // }
//         // this.props.isAuthenticate;
//         // if(localStorage.getItem('token')) {
//         //     this.isAuthenticated = true ;
//         // }
//         // console.log("privateRoute : " + this.props.location.state.isAuthenticate);
//         const Component = this.props.component;
//         const path = this.props.path;
//         return (
//             isAuthenticated ?
//                 <Route path={path} render={(props) => {
//                     return <Component {...props} token={this.props.location.state.token} />
//                 }} /> :
//                 <Redirect to="/AdminLogin" />
//         )
//     }
// }


// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={(props) => (
//         fakeAuth.isAuthenticated === true
//             ? <Component {...props} />
//             : <Redirect to='/login' />
//     )} />
// )

