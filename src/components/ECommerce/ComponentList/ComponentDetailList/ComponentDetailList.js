import React , { Component } from 'react';
import { Link,Route } from 'react-router-dom';


class ComponentDetailList extends Component {

    componentDidMount() {
        console.log(this.props.match.params);
        console.log(window.location.href);
        if(this.props.match.params.category2 == null) {
            console.log("category2 is null");
        }
    }

    render() {
        return (
            <div>
                <ul>
                    <li>part1</li>
                    <li>part2</li>
                    <li>part3</li>
                </ul>
            </div>
        )
    }
};


export default ComponentDetailList;

