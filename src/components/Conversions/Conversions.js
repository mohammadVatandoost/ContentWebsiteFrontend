import React from 'react';
import { NavLink , Route , Switch } from 'react-router-dom';
import BatteryLifeCalculator from './BatteryLifeCalculator/BatteryLifeCalculator';
import ParallelandSeriesResistor from './ParallelandSeriesResistor/ParallelandSeriesResistor';
import ParallelandSeriesCap from './ParallelandSeriesCap/ParallelandSeriesCap';
import CurrentDividerCalculator from './CurrentDividerCalculator/CurrentDividerCalculator';
import TemperatureCalculator from './TemperatureCalculator/TemperatureCalculator';
import ResistorsColorCode from './ResistorsColorCode/ResistorsColorCode';
import LengthCalculator from './LengthCalculator/LengthCalculator';
import RequestNewConversion from './RequestNewConversion/RequestNewConversion';
import VoltageDividerCalculator from './VoltageDividerCalculator/VoltageDividerCalculator';
import WeightCalculator from './WeightCalculator/WeightCalculator';
import './conversions.css';

const Conversions = (props) => (
    <div className="container">
        <ul id="conversionList" className="flex-row space-between" role="navigation">
            <li><NavLink to="/online-conversion-calculator/conversion-calculator-battery-life" activeClassName="verticalListActive"><i class="fas fa-battery-three-quarters"></i><span> محاسبه عمر باتری </span></NavLink></li>
            <li><NavLink to="/online-conversion-calculator/conversion-calculator-parallel-and-series-resistor" activeClassName="verticalListActive">محاسبه مقاومت های سری و موازی</NavLink></li>
            <li><NavLink to="/online-conversion-calculator/conversion-calculator-series-and-parallel-capacitor" activeClassName="verticalListActive">محاسبه خازن های سری و موازی</NavLink></li>
            <li><NavLink to="/online-conversion-calculator/conversion-calculator-current-divider" activeClassName="verticalListActive">محاسبه تقسیم جریان</NavLink></li>
            <li><NavLink to="/online-conversion-calculator/conversion-calculator-voltage-divider" activeClassName="verticalListActive">محاسبه تقسیم ولتاژ</NavLink></li>
            <li><NavLink to="/online-conversion-calculator/conversion-calculator-length" activeClassName="verticalListActive">تبدیل واحدهای طولی</NavLink></li>
            <li><NavLink to="/online-conversion-calculator/conversion-calculator-temperature" activeClassName="verticalListActive">تبدیل واحدهای دما</NavLink></li>
            <li><NavLink to="/online-conversion-calculator/conversion-calculator-weight" activeClassName="verticalListActive">تبدیل واحدهای وزن</NavLink></li>
            <li><NavLink to="/online-conversion-calculator/conversion-calculator-resistor-color-code" activeClassName="verticalListActive">ماشین حساب کد رنگ مقاومتی</NavLink></li>
            <li><NavLink to="/online-conversion-calculator/conversion-calculator-pressure" activeClassName="verticalListActive">تبدیل واحد های فشار</NavLink></li>
            <li><NavLink to="/online-conversion-calculator/request-new-conversion" activeClassName="verticalListActive">درخواست محاسبه جدید</NavLink></li>
        </ul>
        <br/>
            <Switch>
                <Route path="/online-conversion-calculator/conversion-calculator-battery-life"  component={BatteryLifeCalculator}/>
                <Route path="/online-conversion-calculator/conversion-calculator-parallel-and-series-resistor"  component={ParallelandSeriesResistor}/>
                <Route path="/online-conversion-calculator/conversion-calculator-series-and-parallel-capacitor"  component={ParallelandSeriesCap}/>
                <Route path="/online-conversion-calculator/conversion-calculator-current-divider"  component={CurrentDividerCalculator}/>
                <Route path="/online-conversion-calculator/conversion-calculator-temperature"  component={TemperatureCalculator}/>
                <Route path="/online-conversion-calculator/conversion-calculator-resistor-color-code"  component={ResistorsColorCode}/>
                <Route path="/online-conversion-calculator/conversion-calculator-length"  component={LengthCalculator}/>
                <Route path="/online-conversion-calculator/conversion-calculator-voltage-divider"  component={VoltageDividerCalculator}/>
                <Route path="/online-conversion-calculator/conversion-calculator-weight"  component={WeightCalculator}/>
                <Route path="/online-conversion-calculator/request-new-conversion"  component={RequestNewConversion}/>
            </Switch>
    </div>
);

export default Conversions;