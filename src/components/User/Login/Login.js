import React , {Component} from 'react';
import GoogleSingup from  '../GoogleSignup/GoogleSignup';
import { Link, Redirect } from 'react-router-dom';
import Validator from 'validator';
import InlineError from '../../messages/InlineError';
import { ClipLoader } from 'react-spinners';
import CardWrapper from '../../CardWrapper/CardWrapper';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';
import LoginCom from '../../LoginCom/LoginCom';

class Login extends Component {

    // state = {
    //     data: {
    //         email: '',
    //         password: ''
    //     },
    //     loading: false,
    //     errors: {}
    // }

    componentDidMount() {
        // if (!this.props.buildingBurger && this.props.authRedirectPath !== '/') {
        //     this.props.onSetAuthRedirectPath();
        // }
    }
    // sendData = () => {
    //     const errors = this.validate(this.state.data);
    //     this.setState({ errors });
    //     if (Object.keys(errors).length === 0) {
    //         this.setState({loading: true});
    //         this.props.onAuth(this.state.data.email,this.state.data.password);
    //     }
    // }
    //
    // validate = (data) => {
    //     const errors = {};
    //     if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
    //     if (!data.password) errors.password = "Can't be blank";
    //     return errors;
    // }
    //
    // onChange = e =>
    //     this.setState({
    //         data: { ...this.state.data, [e.target.name]: e.target.value }
    //     });


    render() {
        // const { data, errors, loading } = this.state;
        // let errorMessage = null;
        //
        // if (this.props.errorServer) {
        //     errorMessage = (
        //         <p>{this.props.error.message}</p>
        //     );
        // }
        // if (this.props.token) {
        //     return <Redirect to="/" />;
        // }
        return (
            <div className="container" style={{width: "60%"}}>
                <CardWrapper>
                    <h1>ورود</h1>
                    <hr/>
                    <GoogleSingup text="ورود با گوگل"/>
                    <br/>
                    <div className="text-center">
                        <strong>یا</strong>
                    </div>
                    <br/>
                    <LoginCom redirectTo='/'/>
                    {/*{errorMessage}*/}
                    {/*<div className="form-group text-right">*/}
                        {/*<label htmlFor="exampleInputEmail1">ایمیل</label>*/}
                        {/*<input name="email" value={data.email} onChange={this.onChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"*/}
                               {/*placeholder="Enter email"/>*/}
                        {/*{errors.email && <InlineError text={errors.email} />}*/}
                    {/*</div>*/}
                    {/*<div className="form-group text-right">*/}
                        {/*<label htmlFor="exampleInputPassword1">رمز</label>*/}
                        {/*<input name="password" value={data.password} onChange={this.onChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>*/}
                        {/*{errors.password && <InlineError text={errors.password} />}*/}
                    {/*</div>*/}
                    {/*<div className="flex-row space-between">*/}
                        {/*<div>*/}
                            {/*<button hidden={loading} onClick={this.sendData} type="button" className="btn btn-success">ورود</button>*/}
                            {/*<ClipLoader color={'#123abc'} loading={loading} />*/}
                        {/*</div>*/}
                        {/*<Link to="/Signup">ثبت نام نکردم</Link>*/}
                    {/*</div>*/}
                    <br/>
                    <br/>
                </CardWrapper>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        errorServer: state.auth.error,
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email,password) => dispatch(actions.auth(email,password))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);