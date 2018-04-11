import React , {Component} from 'react';
import { NavLink } from 'react-router-dom';
import ContentImage1 from '../../assets/content1.jpg';
import './ContentSmallSize.css';

class ContentSmallSize extends Component {
    render() {
        return (
          <article className="ContentSmallSize">
              <NavLink to="/DashBoard/EnteredInfo" activeClassName="verticalListActive">
              <figure>
               <img  height="225px" width="100%" src={ContentImage1} />
               <figcaption>رباتیک</figcaption>
              </figure>
              <div>
               <h3>کنترلر Can</h3>
               <p>این کنترلر خیلی خفنه</p>
               <span><time>2 روز</time></span>
              </div>
              </NavLink>
          </article>
        )
    }
}

export default ContentSmallSize;