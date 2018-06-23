import React , { Component } from 'react';
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';
import './ECommerce.css';
import ComponentList from './ComponentList/ComponentList';
import IntegratedCircuit from './ComponentList/ComponentDetailList/IntegratedCircuit/IntegratedCircuit';
import Capacitors from './ComponentList/ComponentDetailList/Capacitors/Capacitors';
import VariableResistors from './ComponentList/ComponentDetailList/VariableResistors/VariableResistors';
import Transformers from './ComponentList/ComponentDetailList/Transformers/Transformers';
import Switches from './ComponentList/ComponentDetailList/Switches/Switches';
import Resistors from './ComponentList/ComponentDetailList/Resistors/Resistors';
import Relays from './ComponentList/ComponentDetailList/Relays/Relays';
import Optoelectronics from './ComponentList/ComponentDetailList/Optoelectronics/Optoelectronics';
import Magnetics from './ComponentList/ComponentDetailList/Magnetics/Magnetics';
import Isolators from './ComponentList/ComponentDetailList/Isolators/Isolators';
import ThermalManagement from './ComponentList/ComponentDetailList/ThermalManagement/ThermalManagement';
import InductorCoilsChokes from './ComponentList/ComponentDetailList/InductorCoilsChokes/InductorCoilsChokes';
import Filters from './ComponentList/ComponentDetailList/Filters/Filters';
import CrystalOscillatorsResonators from './ComponentList/ComponentDetailList/CrystalOscillatorsResonators/CrystalOscillatorsResonators';
import DiscreteSemiconductor from './ComponentList/ComponentDetailList/DiscreteSemiconductor/DiscreteSemiconductor';
import CircuitProtection from './ComponentList/ComponentDetailList/CircuitProtection/CircuitProtection';
// import DiscreteSemiconductor from './ComponentList/ComponentDetailList/Connectors/Connectors';
// import DiscreteSemiconductor from './ComponentList/ComponentDetailList/Tools/Tools';

class ECommerce extends Component {


    render() {
        return (
            <div className="flex-row space-between text-right">
                <div className="flex-item-3">
                    <ComponentList/>
                </div>
                <div className="flex-item-8">
                    <Switch>
                      <Route path="/products/مدارهای-مجنمع" component={IntegratedCircuit}/>
                      <Route path="/products/خازن" component={Capacitors}/>
                      <Route path="/products/مقاومت-متغیر" component={VariableResistors}/>
                      <Route path="/products/ترانسفورمرها" component={Transformers}/>
                      <Route path="/products/کلیدها" component={Switches}/>
                    </Switch>
                </div>
            </div>
        )
    }
};


export default ECommerce;

