import React , { Component } from 'react';
import { Link,Route } from 'react-router-dom';

class Filters extends Component {
    render() {
        return (
            <ul>
                <li><Link to="">Accessories</Link></li>
                <li><Link to="">Ceramic Filters</Link></li>
                <li><Link to="">Common Mode Chokes</Link></li>
                <li><Link to="">DSL Filters</Link></li>
                <li><Link to="">EMI/RFI Filters (LC, RC Networks)</Link></li>
                <li><Link to="">Feed Through Capacitors</Link></li>
                <li><Link to="">Ferrite Beads and Chips</Link></li>
                <li><Link to="">Ferrite Cores - Cables and Wiring</Link></li>
                <li><Link to="">Ferrite Disks and Plates</Link></li>
                <li><Link to="">Helical Filters</Link></li>
                <li><Link to="">Monolithic Crystals</Link></li>
                <li><Link to="">Power Line Filter Modules</Link></li>
                <li><Link to="">RF Filters</Link></li>
                <li><Link to="">SAW Filters</Link></li>
            </ul>
        )
    }
};

export default Filters;

