import React , { Component } from 'react';
import { Link,Route } from 'react-router-dom';

class Magnetics extends Component {
    render() {
        return (
            <ul>
                <li><Link to="">Bobbins (Coil Formers), Mounts, Hardware </Link></li>
                <li><Link to="">Ferrite Cores</Link></li>
                <li><Link to="">Magnetic Wire</Link></li>
            </ul>
        )
    }
};

export default Magnetics;

