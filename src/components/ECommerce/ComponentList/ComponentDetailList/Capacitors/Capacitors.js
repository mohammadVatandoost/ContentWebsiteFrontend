import React , { Component } from 'react';
import { Link,Route } from 'react-router-dom';

class Capacitors extends Component {
    render() {
        return (
            <ul>
                <li><Link to="">Aluminum - Polymer Capacitors</Link></li>
                <li><Link to="">Aluminum Electrolytic Capacitors</Link></li>
                <li><Link to="">Capacitor Networks, Arrays</Link></li>
                <li><Link to="">Ceramic Capacitors</Link></li>
                <li><Link to="">Electric Double Layer Capacitors (EDLC), Supercapacitors</Link></li>
                <li><Link to="">Film Capacitors</Link></li>
                <li><Link to="">Mica and PTFE Capacitors</Link></li>
                <li><Link to="">Niobium Oxide Capacitors</Link></li>
                <li><Link to="">Silicon Capacitors</Link></li>
                <li><Link to="">Tantalum - Polymer Capacitors</Link></li>
                <li><Link to="">Tantalum Capacitors</Link></li>
                <li><Link to="">Thin Film Capacitors</Link></li>
                <li><Link to="">Trimmers, Variable Capacitors</Link></li>
            </ul>
        )
    }
};

export default Capacitors;

