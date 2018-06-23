import React , {Component} from 'react';
import GoogleSingup from  '../GoogleSignup/GoogleSignup';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Validator from 'validator';
import InlineError from '../../messages/InlineError';
import { ClipLoader } from 'react-spinners';
import CardWrapper from '../../CardWrapper/CardWrapper';

class Signup extends Component {

    state = {
        data: {
            email: '',
            password: '',
            name: ''
        },
        loading: false,
        errors: {}
    }


    sendData = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.setState({loading: true});
            console.log('sendData');

            axios.post('http://localhost:4000/admin/login',{email: this.state.data.email , password: this.state.data.password})
                .then((req,res) => {
                    if(req.data) {
                        // this.props.authenticateAdmin(req.data);
                        console.log('redirect');
                        // this.props.history.push('/AddPart');
                        this.props.history.push({pathname: '/AddPart', state: { isAuthenticate: true , token: req.data.token }
                        })
                    }
                })
                .catch((error)=> {
                    this.setState({loading: false});
                    console.log('error');
                    console.log(error);
                });
        }

    }

    validate = (data) => {
        const errors = {};
        if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
        if (!data.password) errors.password = "Can't be blank";
        if (!data.name) errors.name = "Can't be blank";
        return errors;
    }

    onChange = e =>
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });


    render() {
        const { data, errors, loading } = this.state;
        return (
            <div className="container" style={{width: "60%"}}>
              <CardWrapper>
                <h1>ثبت نام</h1>
                <hr/>
                <GoogleSingup text="ثبت نام با گوگل"/>
                <br/>
                <div className="text-center">
                    <strong>یا</strong>
                </div>
                <br/>
                <div className="form-group text-right">
                    <label htmlFor="name">اسم</label>
                    <input name="name" value={data.name} onChange={this.onChange} type="text" className="form-control" id="name" aria-describedby="name"
                           placeholder="Enter name"/>
                    {errors.name && <InlineError text={errors.name} />}
                </div>
                <div className="form-group text-right">
                    <label htmlFor="exampleInputEmail1">ایمیل</label>
                    <input name="email" value={data.email} onChange={this.onChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email"/>
                    {errors.email && <InlineError text={errors.email} />}
                </div>
                <div className="form-group text-right">
                    <label htmlFor="exampleInputPassword1">رمز</label>
                    <input name="password" value={data.password} onChange={this.onChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    {errors.password && <InlineError text={errors.password} />}
                </div>
                <div className="flex-row space-between">
                    <div>
                        <button hidden={loading} onClick={this.sendData} type="button" className="btn btn-success">ثبت نام</button>
                        <ClipLoader color={'#123abc'} loading={loading} />
                    </div>
                    <Link to="/Login">ثبت نام کرده ام</Link>
                </div>
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
export default Signup;