import React , { Component } from 'react';
import axios from 'axios';
import Validator from 'validator';
import InlineError from '../../messages/InlineError';
import { ClipLoader } from 'react-spinners';
import ImagesLink from './ImagesLink/ImagesLink';
import image1 from '../../../assets/Slide1.jpg';
import image2 from '../../../assets/Slide2.jpg';
import image3 from '../../../assets/Slide3.jpg';
import image4 from '../../../assets/Slide4.jpg';

class AddImages extends Component {

    state = {
        data: {
            imageFile: null
        },
        loading: false,
        errors: {}
    }


    sendData = () => {
        // const errors = this.validate(this.state.data);
        // this.setState({ errors });
        // if (Object.keys(errors).length === 0) {
        //     this.setState({loading: true});
        //     console.log('sendData');
        //
        //     axios.post('http://localhost:4000/admin/login',{email: this.state.data.email , password: this.state.data.password})
        //         .then((req,res) => {
        //             if(req.data) {
        //                 // this.props.authenticateAdmin(req.data);
        //                 console.log('redirect');
        //                 // this.props.history.push('/AddPart');
        //                 this.props.history.push({pathname: '/AddPart', state: { isAuthenticate: true , token: req.data.token }
        //                 })
        //             }
        //         })
        //         .catch((error)=> {
        //             this.setState({loading: false});
        //             console.log('error');
        //             console.log(error);
        //         });
        // }

    }

    validate = (data) => {
        const errors = {};
        if (!data.imageFile) errors.imageFile = "Can't be blank";
        return errors;
    }

    onChange = e =>
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });

    render() {
        const { data, errors, loading } = this.state;
        return (
            <div className="container text-right">
                <form>
                    <div className="form-group">
                        <label>عکس </label>
                        <input name="imageFile" value={data.imageFile} onChange={this.onChange} type="file" className="form-control" placeholder="Atmega8A"/>
                        {errors.imageFile && <InlineError text={errors.imageFile} />}
                    </div>
                    <br/>
                    <button hidden={loading} onClick={this.sendData} type="button" className="btn btn-primary">Add images</button>
                    <ClipLoader color={'#123abc'} loading={loading} />
                </form>
                <br/>
                <h2>همه ی عکس ها</h2>
                <div className="flex-row space-between flex-wrap">
                  <ImagesLink link={image1}/>
                  <ImagesLink link={image2}/>
                  <ImagesLink link={image3}/>
                  <ImagesLink link={image4}/>
                </div>
            </div>
        )
    }
};

export default AddImages ;
