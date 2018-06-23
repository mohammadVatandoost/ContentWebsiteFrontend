import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import CardWrapper from '../../CardWrapper/CardWrapper';
import './Question.css';

class Question extends Component {
    render() {
        return (
           <div className="Question">
             <CardWrapper>
                <div className="flex-row space-between">
                  <Link to="/Questions/felan"><h4>عنوان سوال من این است ؟</h4></Link>
                  <span className="text-left"> <i class="far fa-clock"></i> <time datetime="2008-02-14 20:00">۳۰ فروردین ۱۳۹۷</time></span>
                </div>
                <p>متن سوال من : بهترین زبان برنامه نویسی برای میکروکنترلرها کدومه ؟</p>
                 <div className="flex-row space-between">
                  <span>محمد وطن دوست</span>
                  <div>
                    <Link to="/Questions/felan"><span className="badge badge-info">ربایتک</span></Link>
                    <Link to="/Questions/felan"><span className="badge badge-info">آنالوگ</span></Link>
                  </div>
                 </div>
             </CardWrapper>
           </div>
        )
    }
}

export default Question;

