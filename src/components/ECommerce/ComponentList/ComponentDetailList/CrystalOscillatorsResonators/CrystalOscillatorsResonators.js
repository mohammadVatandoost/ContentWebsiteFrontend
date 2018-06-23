import React , { Component } from 'react';
import { Link,Route } from 'react-router-dom';

class CrystalOscillatorsResonators extends Component {
    render() {
        return (
            <ul>
                <li><Link to="">Crystals</Link></li>
                <li><Link to="">Oscillators</Link></li>
                <li><Link to="">Pin Configurable/Selectable Oscillators</Link></li>
                <li><Link to="">Programmable Oscillators</Link></li>
                <li><Link to="">Resonators</Link></li>
                <li><Link to="">Sockets and Insulators</Link></li>
                <li><Link to="">Stand Alone Programmers</Link></li>
                <li><Link to="">VCOs (Voltage Controlled Oscillators)</Link></li>
            </ul>
        )
    }
};

export default CrystalOscillatorsResonators;

