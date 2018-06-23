import React , {Component} from 'react';
import importantImage1 from '../../assets/content5.jpeg';
import importantImage2 from '../../assets/content6.png';
import './ImportantPart.css';

class ImportantPart extends Component {

    render() {
        return (
           <div className="flex-column space-between">
             <div className="ImportantData"  style={{backgroundImage: "linear-gradient(to left, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0.29) 55%,rgba(0,0,0,0) 100%), url(" + importantImage1 + ")"}}>
               <div>
                   <h3>Important data</h3>
               </div>
             </div>
             <div className="ImportantData"  style={{marginTop: "10px",backgroundImage: "linear-gradient(to left, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0.29) 55%,rgba(0,0,0,0) 100%), url(" + importantImage2 + ")"}}>
                   <div>
                       <h3>Important data</h3>
                   </div>
             </div>
           </div>
        )
    }
}

export default ImportantPart;