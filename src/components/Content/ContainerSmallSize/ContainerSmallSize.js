import React , {Component} from 'react';
import ContentSmallSize from '../ContentSmallSize/ContentSmallSize';
import './ContainerSmallSize.css';

class ContainerSmallSize extends Component {
    render() {
        return (
         <div className="text-center" style={{backgroundColor: "#EEEEEE"}}>
          <div className="containerSmallSize">
            <ContentSmallSize/>
            <ContentSmallSize/>
            <ContentSmallSize/>
            <ContentSmallSize/>
            <ContentSmallSize/>
            <ContentSmallSize/>
            <ContentSmallSize/>
            <ContentSmallSize/>
          </div>
          <br/>
          <button className="btn btn-primary"> بیشتر... </button>
          <br/>
          <br/>
         </div>
        )
    }
}

export default ContainerSmallSize;