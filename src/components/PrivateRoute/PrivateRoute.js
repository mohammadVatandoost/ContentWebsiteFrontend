import React , {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';
//
// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={(props) => (
//         true === true
//             ? <Component {...props} />
//             : <Redirect to={{ pathname: '/AdminLogin' }} />
//     )} />
// )

class PrivateRoute extends Component {
    render() {
        let isAuthenticated = this.props.location.state.isAuthenticate ;
        // if() {
        //     isAuthenticated = true ;
        // }
        // this.props.isAuthenticate;
        // if(localStorage.getItem('token')) {
        //     this.isAuthenticated = true ;
        // }
        // console.log("privateRoute : " + this.props.location.state.isAuthenticate);
        const Component = this.props.component;
        const path = this.props.path;
        return (
            isAuthenticated ?
                <Route path={path} render={(props) => {
                    return <Component {...props} token={this.props.location.state.token} />
                }} /> :
                <Redirect to="/AdminLogin" />
        )
    }
}
export default PrivateRoute;