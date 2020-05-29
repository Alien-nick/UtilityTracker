import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default class Cards extends Component {
    render() {
        return (
            <div>
                <div>
                <div class="columns">
                    <div class="column">
                        <div class="card">
                            <div class="card-content">
                                <div class="content">
                                    Hours up
                                    <span class="is-success"><FontAwesomeIcon icon={faCoffee} /></span>
                                <br/>
                                    <span>3hrs</span>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div class="column">
                        <div class="card">
                            <div class="card-content">
                                <div class="content">
                                    Outages past week
                                <br/>
                                <time>5</time>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div class="column">
                        <div class="card">
                            <div class="card-content">
                                <div class="content">
                                    Uptime
                                <br/>
                                <time datetime="2016-1-1">50%</time>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div class="column">
                        <div class="card">
                            <div class="card-content">
                                <div class="content">
                                    Temperature
                                <br/>
                                    <span>137C(129 F)</span>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
                <br/>
                <div>
                </div>
                <br/>
            </div>
        )
    }
}

export { Cards }