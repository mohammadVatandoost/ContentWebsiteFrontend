import React , { Component } from 'react';
import axios from 'axios';
import { Link,Route } from 'react-router-dom';
import AuxWrapper from './../../../AuxWrapper/AuxWrapper';
import Select from 'react-select';

class ComponentFilter extends Component {
    state = {
        selectedOption: ''
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    }

    render() {
        const { selectedOption } = this.state;
        const value = selectedOption && selectedOption.value;
        return (
            <div className="flex-row space-around" style={{direction: 'rtl'}}>
                <div className="flex-item-2">
                    <Select
                        name="S1"
                        multi
                        rtl
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={[
                            { value: 'one', label: 'One' },
                            { value: 'two', label: 'Two' },
                            { value: 'three', label: 'three' },
                            { value: 'four', label: 'four' },
                        ]}
                    />
                </div>
                <div className="flex-item-2">
                    <Select
                        name="S2"
                        multi
                        rtl
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={[
                            { value: 'one', label: 'One' },
                            { value: 'two', label: 'Two' },
                            { value: 'three', label: 'three' },
                            { value: 'four', label: 'four' },
                        ]}
                    />
                </div>
            </div>
        )
    }
};


export default ComponentFilter;

