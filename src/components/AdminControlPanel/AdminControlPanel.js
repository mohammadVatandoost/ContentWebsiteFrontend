import React , {Component} from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import Validator from 'validator';
import InlineError from '../messages/InlineError';

class AdminControlPanel extends Component {
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
        if (!data.name) errors.name = "Can't be blank";
        if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
        if (!data.password) errors.password = "Can't be blank";
        return errors;
    }

    onChange = e =>
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });

    render() {
        const { data, errors, loading } = this.state;
        return (
            <div className="container" style={{direction: "ltr"}}>
              <br/>
              <h2>Add Content Manager</h2>
                <div className="form-group">
                    <label htmlFor="exampleInputname">Email address</label>
                    <input name="name" value={data.name} onChange={this.onChange} type="text" className="form-control" id="exampleInputname" aria-describedby="emailHelp"
                           placeholder="Enter Name"/>
                    {errors.name && <InlineError text={errors.name} />}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input name="email" value={data.email} onChange={this.onChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email"/>
                    {errors.email && <InlineError text={errors.email} />}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input name="password" value={data.password} onChange={this.onChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    {errors.password && <InlineError text={errors.password} />}
                </div>
                <button hidden={loading} onClick={this.sendData} type="button" className="btn btn-primary">LogIn</button>
                <ClipLoader color={'#123abc'} loading={loading} />
              <br/>
              <hr/>
              <h2>Remove Content Manager</h2>
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>mary@example.com</th>
                        <th>delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>
                            <button hidden={loading} onClick={this.sendData} type="button" className="btn btn-primary">delete</button>
                            <ClipLoader color={'#123abc'} loading={loading} />
                        </td>
                    </tr>
                    <tr>
                        <td>Mary</td>
                        <td>Moe</td>
                        <td>mary@example.com</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AdminControlPanel;