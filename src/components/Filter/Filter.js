import React , {Component} from 'react';
import './Filter.css';
import ToggleButton from '../ToggleButton/ToggleButton';

class Filter extends Component {
    render() {
        return (
          <div className="Filter">
             <div className="FilterTop">
              <h3>فیلتر</h3>
              <div>
               <ToggleButton toggleState={true} onColor="yellow" offColor="gray" name="آخرین" />
               <button className="ToggleButton" style={{backgroundColor: "black",color: "white"}}><i class="far fa-times-circle"></i> پاک کردن</button>
              </div>
             </div>
             <br/>
             <ul>
                 <li><ToggleButton toggleState={false} onColor="yellow" offColor="gray" name="اینترنت اشیا" /></li>
                 <li><ToggleButton toggleState={false} onColor="yellow" offColor="gray" name="شبکه" /></li>
                 <li><ToggleButton toggleState={false} onColor="yellow" offColor="gray" name="رباتیک" /></li>
                 <li><ToggleButton toggleState={false} onColor="yellow" offColor="gray" name="سنسورها" /></li>
                 <li><ToggleButton toggleState={false} onColor="yellow" offColor="gray" name="کانکتورها" /></li>
                 <li><ToggleButton toggleState={false} onColor="yellow" offColor="gray" name="کنترلرها" /></li>
                 <li><ToggleButton toggleState={false} onColor="yellow" offColor="gray" name="سیستم های Embedded" /></li>
                 <li><ToggleButton toggleState={false} onColor="yellow" offColor="gray" name="تقویت کننده ها" /></li>
                 <li><ToggleButton toggleState={false} onColor="yellow" offColor="gray" name="ابزار" /></li>
                 <li><ToggleButton toggleState={false} onColor="yellow" offColor="gray" name="قدرت" /></li>
             </ul>
          </div>
        )
    }
}
export default Filter;