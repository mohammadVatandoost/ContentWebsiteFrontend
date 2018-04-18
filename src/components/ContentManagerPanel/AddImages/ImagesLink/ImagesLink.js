import React , { Component } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

class ImagesLink extends Component {

    state = {
        copied: false
    }



    onChange = e =>
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });

    onCopy = () => {
        this.setState({copied: true});
    };
    render() {
        return (
            <div className="flex-item-3 text-center">
               <img height="200" src={this.props.link} />
                <br/>
                <CopyToClipboard onCopy={this.onCopy} text={this.props.link}>
                    <button className="btn btn-primary" style={{margin: "5px"}}><i class="far fa-copy"></i></button>
                </CopyToClipboard>
            </div>
        )
    }
};

export default ImagesLink ;
