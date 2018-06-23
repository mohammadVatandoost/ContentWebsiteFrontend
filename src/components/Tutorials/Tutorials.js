import React , {Component} from 'react';
import AuxWrapper from '../AuxWrapper/AuxWrapper';
import './Tutorials.css';
import backgroundImageTut from '../../assets/background.jpg';
import Tutorial from './Tutorial/Tutorial';

class Tutorials extends Component {
    render() {
        return (
            <AuxWrapper>
                {/*<div className="tutorials-backImage" style={{backgroundImage: "linear-gradient(to left, rgba(0,0,0,0.29) 0%,rgba(0,0,0,0.29) 55%,rgba(0,0,0,0.29) 100%), url(" + backgroundImageTut + ")"}}>*/}

                {/*</div>*/}
                <div className="flex-row flex-wrap space-around">
                  <Tutorial/>
                  <Tutorial/>
                  <Tutorial/>
                  <Tutorial/>
                  <Tutorial/>
                </div>
            </AuxWrapper>
        )
    }
}
export default Tutorials;