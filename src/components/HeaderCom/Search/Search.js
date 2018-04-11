import React from 'react';
import './Search.css';

const Search = (props) => (
        <div className="searchForm">
            <select name="category">
                <option value="australia">همه</option>
                <option value="canada">IC</option>
                <option value="usa">مقاومت ها</option>
            </select>
            <input placeholder="نام قطعه را وارد کنید" />
            <button className="btn btn-primary" ><i className="fa fa-search"></i></button>
        </div>
);
// className="btn btn-primary"
// className="form-control"
// className="form-control"
export default Search;