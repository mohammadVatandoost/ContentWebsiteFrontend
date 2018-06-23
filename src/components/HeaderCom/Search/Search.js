import React , {Component} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './Search.css';

class Search extends Component {

    state  = {
        searchKey: '',
        redirect: false,
        category: 'all',
    }

    searchHandler = () => {
       this.setState({redirect: true});
    }


    onChange = (e) => {
        // if(e.target.value.length > 3) {
        //     let url = 'http://localhost:80/ariaelec/public/api/search-part?keyword='+e.target.value;
        //     axios.get(url)
        //         .then(response => {
        //             console.log(response);
        //
        //         })
        //         .catch(err => {
        //
        //         });
        // }
        this.setState({[e.target.name]: e.target.value});
        // console.log(e.target.value.length);
    }

    render() {
        const url = '/search/'+this.state.category+'/'+this.state.searchKey;
        if (this.state.redirect) {
            this.setState({redirect: false});
            return <Redirect to={url} />;
        }
        return(
          <div className="flex-row justify-content-center searchForm flex-item-6">
            <select value={this.state.category} onChange={this.onChange} name="category">
                <option value="all">همه</option>
                <option value="ic">IC</option>
                <option value="res">مقاومت ها</option>
            </select>
            <input name="searchKey" value={this.state.searchKey} onChange={this.onChange} placeholder="نام قطعه را وارد کنید"/>
            <button onClick={this.searchHandler} className="btn"><i className="fa fa-search"></i></button>
          </div>
        )
    }
}

export default Search;