import React , {Component} from 'react';
import axios from 'axios';
import AuxWrapper from './AuxWrapper/AuxWrapper';
import HeaderCom from './HeaderCom/HeaderCom';
import SlideShow from './SlideShow/SlideShow';
import FooterCom from './FooterCom/FooterCom';
import SearchContent from './SearchContent/SearchContent';
import ContainerSmallSize from './Content/ContainerSmallSize/ContainerSmallSize';
import Filter from './Filter/Filter';
import ContentSmallSize from './Content/ContentSmallSize/ContentSmallSize';
import ImportantPart from './ImprtantPart/ImportantPart';

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
                 <div className="flex-row">
                     <div className="flex-item-3">
                         <ImportantPart/>
                     </div>
                    <div className="flex-item-9">
                        <SlideShow />
                    </div>
                 </div>
                  <SearchContent placeHolder="مقاله ای که می خواهید را پیدا کنید" />
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