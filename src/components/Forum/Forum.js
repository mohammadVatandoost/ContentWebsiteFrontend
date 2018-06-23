import React , {Component} from 'react';
import SearchContent from '../SearchContent/SearchContent'
import Question from './Question/Question';

class SlideShow extends Component {
    render() {
        return (
            <div>
                <div className="flex-row space-around text-right">
                    <h1 className="flex-item-5">پرسش ها</h1>
                    <div className="flex-item-5 flex-row space-around">
                        <button className="btn btn-primary"> بی پاسخ ها</button>
                        <button className="btn btn-primary">برچسب ها</button>
                        <button className="btn btn-primary">بپرس</button>
                    </div>
                </div>
                <br/>
                <SearchContent placeHolder="جست و جو کن...."/>
                <br/>
                <Question/>
                <Question/>
                <Question/>
                <Question/>
            </div>
        )
    }
}

export default SlideShow;

