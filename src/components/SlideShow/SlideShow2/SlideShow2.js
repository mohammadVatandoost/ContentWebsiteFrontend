import React , {Component} from 'react';
import classNames from 'classnames';
import AuxWrapper from '../../AuxWrapper/AuxWrapper';
import'./SlideShow2.css';
import slide1 from  '../../../assets/Slide1.jpg';
import slide2 from  '../../../assets/Slide2.jpg';
import slide3 from  '../../../assets/Slide3.jpg';

class SlideShow2 extends Component {
    state = {
        timer: null,
        slideIndex: 1,
        slide1: true,
        slide2: false,
        slide3: false
    }
    componentDidMount() {
        let timer = setInterval(this.plusSlides, 2000);
        this.setState({timer: timer});
        setInterval(this.plusSlides(1), 2000);
    }
    componentWillUnmount() {
        // use intervalId from the state to clear the interval
        clearInterval(this.state.timer);
    }

    showSlides = (n) => {
        this.setState({slide1: false, slide2: false, slide3: false});
        let temp = 'slide' + n ;
        this.setState({[temp]:true});
    }
    plusSlides = () => {
        let temp = this.state.slideIndex + 1;
        if( temp <1 ) {
            temp = 3;
        } else if(temp > 3) {
            temp = 1 ;
        }
        this.setState({slideIndex:temp});
        this.showSlides(temp);
    }
    currentSlide = (n) => {
        this.setState({slideIndex:n});
        this.showSlides(n);
    }

    render() {
        return (
            <AuxWrapper>
              <div className="slideshow-container">
                <div className={classNames("mySlides slideshowFade", {"displayBlock":this.state.slide1})}>
                    <img src={slide1} height="400px"/>
                </div>
                <div className={classNames("mySlides slideshowFade", {"displayBlock":this.state.slide2})}>
                    <img src={slide2} height="400px"/>
                </div>
                <div className={classNames("mySlides slideshowFade", {"displayBlock":this.state.slide3})}>
                    <img src={slide3} height="400px"/>
                </div>
            </div>
                <br/>
                <div className="text-center">
                    <span className={classNames("dot", {"slideshowActive":this.state.slide1})} onClick={() => this.currentSlide(1)}></span>
                    <span className={classNames("dot", {"slideshowActive":this.state.slide2})} onClick={() => this.currentSlide(2)}></span>
                    <span className={classNames("dot", {"slideshowActive":this.state.slide3})} onClick={() => this.currentSlide(3)}></span>
                </div>
            </AuxWrapper>
        )
    }
}

export default SlideShow2;

