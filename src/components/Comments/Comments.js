import React , {Component} from 'react';
import AddComment from './AddComment/AddComment';
import Comment from './Comment/Comment';

class Comments extends Component {
    render() {
        return (
            <div className="container text-right">
                <AddComment/>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        )
    }
}

export default Comments;