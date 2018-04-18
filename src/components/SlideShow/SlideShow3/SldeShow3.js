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
        let timer = setInterval(this.plusSlides, 6000);
        this.setState({timer: timer});
        // setInterval(this.plusSlides(1), 2000);
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
                <div style={{backgroundImage: "linear-gradient(to left, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0.29) 55%,rgba(0,0,0,0) 100%), url(" + slide1 + ")"}} className={classNames("slideShow3-slide slideShow3-fade", {"displayBlock":this.state.slide1})}>
                    <div className="slideShow3-abstract">
                        <h1>SlideShow1</h1>
                    </div>
                </div>
                <div style={{backgroundImage: "linear-gradient(to left, rgba(0,0,0,0.89) 0%,rgba(0,0,0,0.89) 16%,rgba(0,0,0,0.48) 55%,rgba(0,0,0,0) 100%), url(" + slide2 + ")"}} className={classNames("slideShow3-slide slideShow3-fade", {"displayBlock":this.state.slide2})}>
                    <div className="slideShow3-abstract">
                        <h1>SlideShow2</h1>
                    </div>
                </div>
                <div style={{backgroundImage: "linear-gradient(to left, rgba(0,0,0,0.89) 0%,rgba(0,0,0,0.89) 16%,rgba(0,0,0,0.48) 55%,rgba(0,0,0,0) 100%), url(" + slide3 + ")"}} className={classNames("slideShow3-slide slideShow3-fade", {"displayBlock":this.state.slide3})}>
                    <div className="slideShow3-abstract">
                        <h1>SlideShow3</h1>
                    </div>
                </div>
                <br/>
                <div className="text-center">
                    <span className={classNames("dot", {"slideshowActive":this.state.slide1})} onClick={() => this.currentSlide(1)}></span>
                    <span className={classNames("dot", {"slideshowActive":this.state.slide2})} onClick={() => this.currentSlide(2)}></span>
                    <span className={classNames("dot", {"slideshowActive":this.state.slide3})} onClick={() => this.currentSlide(3)}></span>
                </div>
            </section>
        )
    }
}

export default SlideShow3;

