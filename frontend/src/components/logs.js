import React, { Component } from 'react';
import { Charts } from './charts';
import { Cards } from './cards';

export default class Logs extends Component {
    render() {
        return (
        <div>
            <Cards/>
                <div class="columns">
                    <div class="column is-mobile is-8">
                    <nav class="panel is-info">
                        <p class="panel-heading">
                            GPL Logs
                        </p>
                        <div class="panel-block">
                            <p class="control has-icons-left">
                            <input class="input" type="text" placeholder="Search"/>
                            <span class="icon is-left">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </span>
                            </p>
                        </div>
                        <div class="panel-block">
                            <div class="columns">
                                <div class="column">
                                    <span class="tag is-warning">3 Mins Ago</span>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-success">Stable</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">3.4 Volts</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">13.4 Amps</h1>
                                </div>
                            </div>
                        </div>
                        <div class="panel-block">
                            <div class="columns">
                                <div class="column">
                                    <span class="tag is-warning">4 Mins Ago</span>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-danger">Outage</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">3.4 Volts</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">13.4 Amps</h1>
                                </div>
                            </div>
                        </div>
                        <div class="panel-block">
                            <div class="columns">
                                <div class="column">
                                    <span class="tag is-warning">5 Mins Ago</span>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-success">Stable</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">3.4 Volts</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">13.4 Amps</h1>
                                </div>
                            </div>
                        </div>
                        <div class="panel-block">
                            <div class="columns">
                                <div class="column">
                                    <span class="tag is-warning">6 Mins Ago</span>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-danger">Outage</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">3.4 Volts</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">13.4 Amps</h1>
                                </div>
                            </div>
                        </div>
                        <div class="panel-block">
                            <div class="columns">
                                <div class="column">
                                    <span class="tag is-warning">7 Mins Ago</span>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-danger">Outage</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">3.4 Volts</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">13.4 Amps</h1>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div class="block">
                        <nav class="pagination is-small">
                            <a href="" class="pagination-previous" disabled>Previous</a>
                            <a href="" class="pagination-next">Next page</a>
                            <ul class="pagination-list">
                            <li>
                                <a href="" class="pagination-link is-current">1</a>
                            </li>
                            <li>
                                <a href="" class="pagination-link">2</a>
                            </li>
                            <li>
                                <a href="" class="pagination-link">3</a>
                            </li>
                            </ul>
                        </nav>
                        </div>
                      </nav>
                    </div>
                    <div class="column">
                        <Charts/>
                    </div>
                </div>
            </div>
        )
    }
}