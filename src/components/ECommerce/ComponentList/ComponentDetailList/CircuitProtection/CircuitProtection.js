import React , { Component } from 'react';
import { Link,Route } from 'react-router-dom';

class CircuitProtection extends Component {
    render() {
        return (
            <ul>
                <li><Link to="">Circuit Breakers</Link></li>
                <li><Link to="">Disconnect Switch Components</Link></li>
                <li><Link to="">Electrical, Specialty Fuses </Link></li>
                <li><Link to="">Fuseholders</Link></li>
                <li><Link to="">Fuses</Link></li>
                <li><Link to="">Gas Discharge Tube Arresters (GDT) </Link></li>
                <li><Link to="">Ground Fault Circuit Interrupter (GFCI)</Link></li>
                <li><Link to="">Inrush Current Limiters (ICL)</Link></li>
                <li><Link to="">Lighting Protection</Link></li>
                <li><Link to="">PTC Resettable Fuses</Link></li>
                <li><Link to="">Surge Suppression ICs</Link></li>
                <li><Link to="">Thermal Cutoffs (Thermal Fuses)</Link></li>
                <li><Link to="">TVS - Diodes</Link></li>
                <li><Link to="">TVS - Mixed Technology</Link></li>
                <li><Link to="">TVS - Thyristors</Link></li>
                <li><Link to="">TVS - Varistors, MOVs</Link></li>
            </ul>
        )
    }
};

export default CircuitProtection;

