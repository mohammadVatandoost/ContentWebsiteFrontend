import React , {Component} from 'react';
import './SearchContent.css';

class SearchContent extends Component {

    render() {
        return (
         <div className="SearchContent">
             <div>
                <input placeholder="مطالب و مقاله ها جست و جو کنید " />
                <button className="btn btn-primary"> جست و جو </button>
             </div>
             <h2>مطالب و فیلم ها</h2>
         </div>
        )
    }
}

export default SearchContent;