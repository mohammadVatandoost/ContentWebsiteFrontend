import React from 'react';
import './Search.css';

const Search = (props) => (
        <div className="flex-row justify-content-center searchForm flex-item-6">
            <select name="category">
                <option value="australia">همه</option>
                <option value="canada">IC</option>
                <option value="usa">مقاومت ها</option>
            </select>
            <input placeholder="نام قطعه را وارد کنید" />
            <button className="btn" ><i className="fa fa-search"></i></button>
        </div>
);

export default Search;