import React , {Component} from 'react';

class Login extends Component {
    state = {
        toggle: this.props.toggleState
    }

    toggleHandler = () => {
        this.setState({toggle: !this.state.toggle});
        // this.props.handleFunction();
    }

    render() {
        let color = this.props.offColor;
        if(this.state.toggle) {
            color = this.props.onColor;
        }
        return (
            <button style={{backgroundColor : color}} className="ToggleButton" onClick={this.toggleHandler}>{this.props.name}</button>
        )
    }
}
export default Login;