import React , {Component} from 'react';
import SVG from '../../assets/SVG/magnifying-glass.svg';
import './SearchContent.css';

class SearchContent extends Component {

    render() {
        return (
          <div className="SearchContent">
           <div className="search">
             <input type="text" className="search__input" placeholder="مقاله ای که می خواهید را پیدا کنید"/>
             <button className="search__button">
                 <i className="fa fa-search"></i>
             </button>
            </div>
          </div>
        )
    }
}
{/*<div className="SearchContent">*/}
        {/*<div>*/}
            {/*<input placeholder="مطالب و مقاله ها جست و جو کنید " />*/}
            {/*<button className="btn btn-primary"> جست و جو </button>*/}
        {/*</div>*/}
        {/*<h2>مطالب و فیلم ها</h2>*/}
        // </div>

{/*<svg className="search__icon">*/}
    {/*<use xlinkHref={SVG}></use>*/}
{/*</svg>*/}
export default SearchContent;