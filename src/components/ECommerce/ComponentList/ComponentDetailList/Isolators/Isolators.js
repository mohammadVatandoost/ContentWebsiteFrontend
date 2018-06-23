import React , { Component } from 'react';
import { Link,Route } from 'react-router-dom';

class Isolators extends Component {
    render() {
        return (
            <ul>
                <li><Link to="">Digital Isolators</Link></li>
                <li><Link to="">Isolators - Gate Drivers</Link></li>
                <li><Link to="">Optoisolators - Logic Output</Link></li>
                <li><Link to="">Optoisolators - Transistor, Photovoltaic Output</Link></li>
                <li><Link to="">Optoisolators - Triac, SCR Output</Link></li>
                <li><Link to="">Special Purpose</Link></li>
            </ul>
        )
    }
};

export default Isolators;

