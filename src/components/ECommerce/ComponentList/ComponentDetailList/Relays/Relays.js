import React , { Component } from 'react';
import { Link,Route } from 'react-router-dom';

class Relays extends Component {
    render() {
        return (
            <ul>
                <li><Link to="">Accessories</Link></li>
                <li><Link to="">Automotive Relays</Link></li>
                <li><Link to="">Contactors (Electromechanical)</Link></li>
                <li><Link to="">Contactors (Solid State)</Link></li>
                <li><Link to="">High Frequency (RF) Relays</Link></li>
                <li><Link to="">I/O Relay Module Racks</Link></li>
                <li><Link to="">I/O Relay Modules</Link></li>
                <li><Link to="">Power Relays, Over 2 Amps</Link></li>
                <li><Link to="">Reed Relays</Link></li>
                <li><Link to="">Relay Sockets</Link></li>
                <li><Link to="">Signal Relays, Up to 2 Amps</Link></li>
                <li><Link to="">Solid State Relays</Link></li>
            </ul>
        )
    }
};

export default Relays;

