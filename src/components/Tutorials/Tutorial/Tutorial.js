import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import './Tutorial.css';
import tutorialImage from '../../../assets/tutorialImage.jpg';


class Tutorial extends Component {
    render() {
        return (
            <div className="ContentSmallSize">
                <Link to="/articles/felan">
                    <figure>
                        <img  height="225px" width="100%" src={tutorialImage} />
                        <figcaption style={{left: 0,top: 10}}>کامل نشده</figcaption>
                    </figure>
                    <div>
                        <h3>آموزش RTOS</h3>
                        <p>آموزش نصب و کار با سیستم عامل (FreeRTOS( Real Time Operating System بر روی Arduino, STM32F4x و میکروکنترلر های ARM cortex M  </p>
                        <span>7:16:23</span>
                    </div>
                </Link>
            </div>
        )
    }
}
export default Tutorial;