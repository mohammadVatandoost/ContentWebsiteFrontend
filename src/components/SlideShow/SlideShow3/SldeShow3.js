import React , {Component} from 'react';
import classNames from 'classnames';
import AuxWrapper from '../../AuxWrapper/AuxWrapper';
import'./SlideShow3.css';
import slide1 from  '../../../assets/Slide1.jpg';
import slide2 from  '../../../assets/Slide2.jpg';
import slide3 from  '../../../assets/Slide3.jpg';

class SlideShow3 extends Component {
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
            <section className="slideShow3">
                <div style={{backgroundImage: "linear-gradient(to left, black, transparent, url(" + slide1 + ")"}} className={classNames("slideShow3-slide slideShow3-fade", {"displayBlock":this.state.slide1})}>
                    <div className="slideShow3-abstract">
                        <h1>SlideShow1</h1>
                    </div>
                </div>
                <div style={{backgroundImage: "linear-gradient(to left, rgba(0, 0, 0, 1), rgba(255, 255, 255, 1)), url(" + slide2 + ")"}} className={classNames("slideShow3-slide slideShow3-fade", {"displayBlock":this.state.slide2})}>
                    <div className="slideShow3-abstract">
                        <h1>SlideShow2</h1>
                    </div>
                </div>
                <div style={{backgroundImage: "linear-gradient(to left, rgba(244, 212, 48, 0.8), rgba(254, 240, 53, 0.8)), url(" + slide3 + ")"}} className={classNames("slideShow3-slide slideShow3-fade", {"displayBlock":this.state.slide3})}>
                    <div className="slideShow3-abstract">
                        <h1>SlideShow3</h1>
                    </div>
                </div>
            </section>
        )
    }
}

export default SlideShow3;

