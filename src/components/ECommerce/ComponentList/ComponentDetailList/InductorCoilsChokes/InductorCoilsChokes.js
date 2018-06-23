import React , { Component } from 'react';
import { Link,Route } from 'react-router-dom';

class InductorCoilsChokes extends Component {
    render() {
        return (
            <ul>
                <li><Link to="">Adjustable Inductors</Link></li>
                <li><Link to="">Arrays, Signal Transformers</Link></li>
                <li><Link to="">Delay Lines</Link></li>
                <li><Link to="">Fixed Inductors</Link></li>
                <li><Link to="">Wireless Charging Coils</Link></li>
            </ul>
        )
    }
};

export default InductorCoilsChokes;

