import React , { Component } from 'react';
import { Link,Route } from 'react-router-dom';

class VariableResistors extends Component {
    render() {
        return (
            <ul>
                <li><Link to="">Accessories</Link></li>
                <li><Link to="">Adjustable Power Resistor</Link></li>
                <li><Link to="">Joystick Potentiometers</Link></li>
                <li><Link to="">Rotary Potentiometers, Rheostats</Link></li>
                <li><Link to="">Scale Dials</Link></li>
                <li><Link to="">Slide Potentiometers</Link></li>
                <li><Link to="">Thumbwheel Potentiometers</Link></li>
                <li><Link to="">Trimmer Potentiometers</Link></li>
                <li><Link to="">Value Display Potentiometers</Link></li>
            </ul>
        )
    }
};

export default VariableResistors;

