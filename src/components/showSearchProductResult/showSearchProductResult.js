import React , {Component} from 'react';
import axios from 'axios';

class showSearchProductResult extends Component {

    state  = {
        searchKey: ''
    }

    componentDidMount() {
        let url = 'http://localhost:80/ariaelec/public/api/search-part?keyword='+this.props.match.params.keyword;
        console.log(url);
        axios.get(url)
            .then(response => {
                console.log(response);
            })
            .catch(err => {

            });
    }

    searchHandler = () => {
        console.log("searching");
        let url = 'http://localhost:80/ariaelec/public/api/search-part?keyword='+this.state.searchKey;
        axios.get(url)
            .then(response => {
                console.log(response);
            })
            .catch(err => {

            });
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
        this.setState({searchKey: e.target.value});
        // console.log(e.target.value.length);
    }

    render() {
        return(
            <div className="flex-row justify-content-center searchForm flex-item-6">
               <h1>hello</h1>
            </div>
        )
    }
}

export default showSearchProductResult;