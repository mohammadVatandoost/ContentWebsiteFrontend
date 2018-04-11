import React , {Component} from 'react';
import classNames from 'classnames';
import AuxWrapper from '../../AuxWrapper/AuxWrapper';
import'./SlideShow1.css';
import slide1 from  '../../../assets/Slide1.jpg';
import slide2 from  '../../../assets/Slide2.jpg';
import slide3 from  '../../../assets/Slide3.jpg';

class SlideShow1 extends Component {
    render() {
        return (
            <AuxWrapper>
                <div className="slides">
                    <ul>
                        <li><img src={slide1} alt="image01" />
                            <div>Promo text #1</div>
                        </li>
                        <li><img src={slide2} alt="image02" />
                            <div>Promo text #2</div>
                        </li>
                        <li><img src={slide3} alt="image03" />
                            <div>Promo text #3</div>
                        </li>
                        <li><img src={slide2} alt="image04" />
                            <div>Promo text #4</div>
                        </li>
                    </ul>
                </div>
                <br/>
            </AuxWrapper>
        )
    }
}

export default SlideShow1;
