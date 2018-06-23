import React , { Component } from 'react';
import { Link,Route } from 'react-router-dom';

class Resistors extends Component {
    render() {
        return (
            <ul>
                <li><Link to="">Accessories</Link></li>
                <li><Link to="">Chassis Mount Resistors</Link></li>
                <li><Link to="">Chip Resistor - Surface Mount</Link></li>
                <li><Link to="">Precision Trimmed Resistors</Link></li>
                <li><Link to="">Resistor Networks, Arrays</Link></li>
                <li><Link to="">Specialized Resistors</Link></li>
                <li><Link to="">Through Hole Resistors</Link></li>
            </ul>
        )
    }
};

export default Resistors;

