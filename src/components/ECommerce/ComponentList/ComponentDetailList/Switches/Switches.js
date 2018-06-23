import React , { Component } from 'react';
import { Link,Route } from 'react-router-dom';

class Switches extends Component {
    render() {
        return (
            <ul>
                <li><Link to="">Accessories</Link></li>
                <li><Link to="">Accessories - Boots, Seals</Link></li>
                <li><Link to="">Accessories - Caps</Link></li>
                <li><Link to="">Cable Pull Switches</Link></li>
                <li><Link to="">Configurable Switch Components - Body</Link></li>
                <li><Link to="">Configurable Switch Components - Contact Block</Link></li>
                <li><Link to="">Configurable Switch Components - Illumination Source</Link></li>
                <li><Link to="">Configurable Switch Components - Lens</Link></li>
                <li><Link to="">DIP Switches</Link></li>
                <li><Link to="">Keylock Switches</Link></li>
                <li><Link to="">Keypad Switches</Link></li>
                <li><Link to="">Magnetic, Reed Switches</Link></li>
                <li><Link to="">Navigation Switches, Joystick</Link></li>
                <li><Link to="">Programmable Display Switches</Link></li>
                <li><Link to="">Pushbutton Switches</Link></li>
                <li><Link to="">Pushbutton Switches - Hall Effect</Link></li>
                <li><Link to="">Rocker Switches</Link></li>
                <li><Link to="">Rotary Switches</Link></li>
                <li><Link to="">Selector Switches </Link></li>
                <li><Link to="">Slide Switches</Link></li>
                <li><Link to="">Snap Action, Limit Switches</Link></li>
                <li><Link to="">Tactile Switches</Link></li>
                <li><Link to="">Thumbwheel Switches</Link></li>
                <li><Link to="">Toggle Switches</Link></li>
            </ul>
        )
    }
};

export default Switches;

