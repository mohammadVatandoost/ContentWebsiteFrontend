import React , {Component} from 'react';
import axios from 'axios';
import AuxWrapper from './AuxWrapper/AuxWrapper';
import HeaderCom from './HeaderCom/HeaderCom';
import SlideShow from './SlideShow/SlideShow';
import FooterCom from './FooterCom/FooterCom';
import SearchContent from './SearchContent/SearchContent';
import ContainerSmallSize from './ContainerSmallSize/ContainerSmallSize';
import Filter from './Filter/Filter';
import ContentSmallSize from './ContainerSmallSize/ContainerSmallSize';

class Main extends Component {
    // state = {
    //    parts: [],
    //    error:''
    // }

    // componentDidMount() {
    //     axios.get('http://localhost:4000/allAdmins')
    //         .then((res) => {
    //            // this.setState({parts: res.data.parts});
    //            console.log('componentDidMount Then');
    //            console.log(res);
    //         })
    //         .catch(error => {
    //             // this.setState({error: error});
    //             console.log('componentDidMount catch');
    //         });
    //     console.log('componentDidMount');
    //     // axios.post('http://localhost:4000/admin/login',{email: 'mohamadvatandoost512' , password: '13741374'})
    //     //     .then((res) => {
    //     //         console.log('res' + res.header('x-auth'));
    //     //     })
    //     //     .catch((error)=> {
    //     //         console.log(error);
    //     //     });
    // }

    render() {
        return (
            <AuxWrapper>
                 <div className="row">
                     <div className="col-md-4 flex-column">
                         {/*<ContentSmallSize/>*/}
                     </div>
                    <div className="col-md-8">
                        <SlideShow />
                    </div>
                 </div>
                  <SearchContent/>
                  <Filter/>
                  <ContainerSmallSize/>
            </AuxWrapper>
        )
    }
}
// const dataSlice = res.data.slice(0,10);
// const updateData = dataSlice.map((partData) => {
//   return {
//       ...partData,
//       link: '/public/' + partData.id
//   }
// });
export default Main;