import React , { Component } from 'react';
import { Link,Route } from 'react-router-dom';

class Transformers extends Component {
    render() {
        return (
            <ul>
                <li><Link to="">Accessories</Link></li>
                <li><Link to="">Audio Transformers</Link></li>
                <li><Link to="">Current Sense Transformers</Link></li>
                <li><Link to="">Isolation Transformers and Autotransformers, Step Up, Step Down</Link></li>
                <li><Link to="">Power Transformers</Link></li>
                <li><Link to="">Pulse Transformers</Link></li>
                <li><Link to="">Specialty Transformers</Link></li>
                <li><Link to="">Switching Converter, SMPS Transformers</Link></li>
            </ul>
        )
    }
};

export default Transformers;

