import React , {Component} from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import InlineError from '../../messages/InlineError';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';
import '../../../../node_modules/draft-js/dist/Draft.css';
import ContainerSmallSize from '../../ContainerSmallSize/ContainerSmallSize';
import TextEditor from '../TextEditor/TextEditor';
import TextEditor1 from '../TextEditor/AddImageEditor/index';
import TextEditor2 from '../TextEditor/CustomImageEditor/index';
import TextEditor3 from '../TextEditor/SimpleImageEditor/index';

class AddContent extends Component {
    state = {
        data: {
            title: '',
            abstract: '',
            textArea1: '',
            imageTitle:null,
        },
        loading: false,
        errors: {}
    }

    validate = (data) => {
        const errors = {};
        if (!data.partName) errors.partName = "Can't be blank";
        if (!data.count) errors.count = "Can't be blank";
        if (!data.dataSheet) errors.dataSheet = "Can't be blank";
        if (!data.imagePart) errors.imagePart = "Can't be blank";

        return errors;
    }

    onChange = e =>
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });
    onChangeFile = e =>
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.files[0] }
        });

    sendData = (event) => {
        event.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.setState({loading: true});
            const fd = new FormData();
            fd.append('partName',this.state.data.partName);
            fd.append('count',this.state.data.count);
            fd.append('dataSheet',this.state.data.dataSheet);
            fd.append('imagePart',this.state.data.imagePart);
            console.log('this.state.data : ');
            console.log(this.state.data);
            let headers = {
                'x-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWI4OWUzNTI1NDA4MzI3ZGNmNTI1YjAiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTIyMDkxNTcxfQ.qXaRtkUsRd6zBxT9Fzwj1BpmGE-0OIQ1nZxfpN82y-M'
            };
            let axiosConfig = {
                headers: {
                    'x-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWI4OWUzNTI1NDA4MzI3ZGNmNTI1YjAiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTIyMDkxNTcxfQ.qXaRtkUsRd6zBxT9Fzwj1BpmGE-0OIQ1nZxfpN82y-M'
                }
            };
            console.log('fd : ');
            console.log(fd);
            axios.post('http://localhost:4000/admin/addPart', this.state.data , axiosConfig )
                .then((req,res) => {
                    console.log(req);
                    if(req.data) {
                        console.log('redirect');
                    }
                    this.setState({loading: false});
                })
                .catch((error)=> {
                    this.setState({loading: false});
                    console.log('error');
                    console.log(error);
                });
        }

    }

    render() {
        const { data, errors, loading } = this.state;
        return (
            <div className="container">
                <br/>
                <br/>
                <form className="text-right">
                    <div className="form-group">
                        <label>عنوان</label>
                        <input name="title" value={data.title} onChange={this.onChange} type="text" className="form-control" placeholder="Atmega8A"/>
                        {errors.title && <InlineError text={errors.title} />}
                    </div>
                    <div className="form-group">
                        <label>خلاصه</label>
                        <input name="abstract" value={data.abstract} onChange={this.onChange} type="text" className="form-control" placeholder="Atmega8A"/>
                        {errors.abstract && <InlineError text={errors.abstract} />}
                    </div>
                    <div className="form-group">
                        <label>عکس کوچک</label>
                        <input name="imageTitle" value={data.imageTitle} onChange={this.onChange} type="file" className="form-control" placeholder="Atmega8A"/>
                        {errors.imageTitle && <InlineError text={errors.imageTitle} />}
                    </div>
                    <div className="form-group">
                        <select className="form-control" name="category">
                            <option value="australia">همه</option>
                            <option value="canada">IC</option>
                            <option value="usa">مقاومت ها</option>
                        </select>
                    </div>
                    <TextEditor/>
                    <button hidden={loading} onClick={this.sendData} type="submit" className="btn btn-primary">Send</button>
                    <ClipLoader color={'#123abc'} loading={loading} />
                </form>
                <br/>
                <br/>
                <ContainerSmallSize/>
                <br/>
                <TextEditor1/>
                <hr/>
                <TextEditor3/>
                <br/>
            </div>
        )
    }
}
export default AddContent;