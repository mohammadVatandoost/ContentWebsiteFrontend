import React , { Component } from 'react';
import axios from 'axios';
import { Link,Route } from 'react-router-dom';
import AuxWrapper from './../../AuxWrapper/AuxWrapper';
import ComponentFilter from './ComponentFilter/ComponentFilter';

class ComponentDetail extends Component {

    render() {

        return (
            <AuxWrapper>
                <ComponentFilter/>
                <div className="container">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                        </tr>
                        <tr>
                            <th>
                                <div className="flex-row space-around flex-center-align">
                                    <i class="fa fa-arrow-down" aria-hidden="true"></i>
                                    <i class="fa fa-arrow-up" aria-hidden="true"></i>
                                </div>
                            </th>
                            <th>
                                <div className="flex-row space-around flex-center-align">
                                    <i class="fa fa-arrow-down" aria-hidden="true"></i>
                                    <i class="fa fa-arrow-up" aria-hidden="true"></i>
                                </div>
                            </th>
                            <th>
                                <div className="flex-row space-around flex-center-align">
                                    <i class="fa fa-arrow-down" aria-hidden="true"></i>
                                    <i class="fa fa-arrow-up" aria-hidden="true"></i>
                                </div>
                            </th>
                            <th>
                                <div className="flex-row space-around flex-center-align">
                                    <i class="fa fa-arrow-down" aria-hidden="true"></i>
                                    <i class="fa fa-arrow-up" aria-hidden="true"></i>
                                </div>
                            </th>
                            <th>
                                <div className="flex-row space-around flex-center-align">
                                    <i class="fa fa-arrow-down" aria-hidden="true"></i>
                                    <i class="fa fa-arrow-up" aria-hidden="true"></i>
                                </div>
                            </th>
                            <th>
                                <div className="flex-row space-around flex-center-align">
                                    <i class="fa fa-arrow-down" aria-hidden="true"></i>
                                    <i class="fa fa-arrow-up" aria-hidden="true"></i>
                                </div>
                            </th>
                            <th>
                                <div className="flex-row space-around flex-center-align">
                                    <i class="fa fa-arrow-down" aria-hidden="true"></i>
                                    <i class="fa fa-arrow-up" aria-hidden="true"></i>
                                </div>
                            </th>
                            <th>
                                <div className="flex-row space-around flex-center-align">
                                    <i class="fa fa-arrow-down" aria-hidden="true"></i>
                                    <i class="fa fa-arrow-up" aria-hidden="true"></i>
                                </div>
                            </th>
                            <th>
                                <div className="flex-row space-around flex-center-align">
                                    <i class="fa fa-arrow-down" aria-hidden="true"></i>
                                    <i class="fa fa-arrow-up" aria-hidden="true"></i>
                                </div>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                        </tr>
                        <tr>
                            <td>Mary</td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                            <td>Mary</td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                            <td>Mary</td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                        </tr>
                        <tr>
                            <td>July</td>
                            <td>Dooley</td>
                            <td>july@example.com</td>
                            <td>July</td>
                            <td>Dooley</td>
                            <td>july@example.com</td>
                            <td>July</td>
                            <td>Dooley</td>
                            <td>july@example.com</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </AuxWrapper>
        )
    }
};


export default ComponentDetail;

