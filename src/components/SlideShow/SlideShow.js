import React , {Component} from 'react';
import classNames from 'classnames';
import AuxWrapper from '../AuxWrapper/AuxWrapper';
import'./SlideShow.css';
import SlideShow1 from './SlideShow1/SlideShow1';
import SlideShow2 from './SlideShow2/SlideShow2';
import SlideShow3 from './SlideShow3/SldeShow3';

class SlideShow extends Component {
    render() {
        return (
          <AuxWrapper>
            <SlideShow3/>
              <br/>
          </AuxWrapper>
        )
    }
}

export default SlideShow;

