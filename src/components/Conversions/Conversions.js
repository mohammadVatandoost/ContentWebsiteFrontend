import React from 'react';
import { NavLink , Route , Switch } from 'react-router-dom';
import BatteryLifeCalculator from './BatteryLifeCalculator/BatteryLifeCalculator';
import ParallelandSeriesResistor from './ParallelandSeriesResistor/ParallelandSeriesResistor';
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
            <li><NavLink to="/online-conversion-calculator/conversion-calculator-resistor-color-code-4-band" activeClassName="verticalListActive">ماشین حساب کد رنگ مقاومتی</NavLink></li>
            <li><NavLink to="/online-conversion-calculator/conversion-calculator-pressure" activeClassName="verticalListActive">تبدیل واحد های فشار</NavLink></li>
            <li><NavLink to="/online-conversion-calculator/request-new-conversion" activeClassName="verticalListActive">درخواست محاسبه جدید</NavLink></li>
        </ul>
        <br/>
            <Switch>
                <Route path="/online-conversion-calculator/conversion-calculator-battery-life"  component={BatteryLifeCalculator}/>
                <Route path="/online-conversion-calculator/conversion-calculator-parallel-and-series-resistor"  component={ParallelandSeriesResistor}/>
            </Switch>
    </div>
);

export default Conversions;