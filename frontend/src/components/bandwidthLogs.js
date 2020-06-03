import React, { Component } from 'react';
import { BandwidthCharts } from './bandwidthCharts';
import { BandwidthCards } from './bandwidthCards';

export default class BandwidthLogs extends Component {
    render() {
        return (
        <div>
            <BandwidthCards/>
                <div class="columns">
                    <div class="column is-mobile is-8">
                    <nav class="panel is-info">
                        <p class="panel-heading">
                            Bandwidth Logs
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
                                    <span class="tag is-warning">Yesterday</span>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-success">Stable</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">17 Mbps Down</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">3.1 Mbps Up</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">Client PlisanceGy</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">Latency Unloaded 60ms</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">Latency Loaded 1.2s</h1>
                                </div>
                            </div>
                        </div>
                        <div class="panel-block">
                            <div class="columns">
                                <div class="column">
                                    <span class="tag is-warning">2 Days ago</span>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-danger">Outage</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">0 Mbps Down</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">0 Mbps Up</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">Client PlisanceGy</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">Latency Unloaded 0</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">Latency Loaded 0</h1>
                                </div>
                            </div>
                        </div>
                        <div class="panel-block">
                            <div class="columns">
                                <div class="column">
                                    <span class="tag is-warning">3 days ago</span>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-success">Stable</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">17 Mbps Down</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">3.1 Mbps Up</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">Client PlisanceGy</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">Latency Unloaded 60ms</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">Latency Loaded 1.2s</h1>
                                </div>
                            </div>
                        </div>
                        <div class="panel-block">
                            <div class="columns">
                                <div class="column">
                                    <span class="tag is-warning">4 days ago</span>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-success">Stable</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">17 Mbps Down</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">3.1 Mbps Up</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">Client PlisanceGy</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">Latency Unloaded 60ms</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">Latency Loaded 1.2s</h1>
                                </div>
                            </div>
                        </div>
                        <div class="panel-block">
                            <div class="columns">
                                <div class="column">
                                    <span class="tag is-warning">5 days ago</span>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-success">Stable</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">17 Mbps Down</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">3.1 Mbps Up</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">Client PlisanceGy</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">Latency Unloaded 60ms</h1>
                                </div>
                                <div class="column">
                                    <h1 class="tag is-primary">Latency Loaded 1.2s</h1>
                                </div>
                            </div>
                        </div>
                        
                        <br/>
                        <div class="block">
                        <nav class="pagination is-small">
                            <a href="#" class="pagination-previous" disabled>Previous</a>
                            <a href="#" class="pagination-next">Next page</a>
                            <ul class="pagination-list">
                            <li>
                                <a href="#" class="pagination-link is-current">1</a>
                            </li>
                            <li>
                                <a href="#" class="pagination-link">2</a>
                            </li>
                            <li>
                                <a href="#" class="pagination-link">3</a>
                            </li>
                            </ul>
                        </nav>
                        </div>
                      </nav>
                    </div>
                    <div class="column">
                        <BandwidthCharts/>
                    </div>
                </div>
            </div>
        )
    }
}