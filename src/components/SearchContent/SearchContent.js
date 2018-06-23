import React , {Component} from 'react';
import SVG from '../../assets/SVG/magnifying-glass.svg';
import './SearchContent.css';

class SearchContent extends Component {

    render() {
        return (
          <div className="SearchContent">
           <div className="search">
             <input type="text" className="search__input" placeholder={this.props.placeHolder} />
             <button className="search__button">
                 <i className="fa fa-search"></i>
             </button>
            </div>
          </div>
        )
    }
}

export default SearchContent;