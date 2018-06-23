import React , { Component } from 'react';
import { Link,Route } from 'react-router-dom';

class ThermalManagement extends Component {
    render() {
        return (
            <ul>
                <li><Link to="">AC Fans</Link></li>
                <li><Link to="">DC Fans</Link></li>
                <li><Link to="">Fans - Accessories</Link></li>
                <li><Link to="">Fans - Finger Guards, Filters & Sleeves</Link></li>
                <li><Link to="">Thermal - Accessories</Link></li>
                <li><Link to="">Thermal - Adhesives, Epoxies, Greases, Pastes</Link></li>
                <li><Link to="">Thermal - Heat Sinks</Link></li>
                <li><Link to="">Thermal - Liquid Cooling </Link></li>
                <li><Link to="">Thermal - Pads, Sheets</Link></li>
                <li><Link to="">Thermal - Thermoelectric, Peltier Assemblies</Link></li>
                <li><Link to="">Thermal - Thermoelectric, Peltier Modules</Link></li>
            </ul>
        )
    }
};

export default ThermalManagement;

