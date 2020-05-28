import React, { Component } from 'react';

export default class Logs extends Component {
    render() {
        return (
            <div>
                <nav class="level is-mobile">
                <div class="level-item notification is-success has-text-centered">
                    <div>
                    <p class="heading has-text-weight-bold">Uptime</p>
                    <p class="title">24hrs 59min</p>
                    </div>
                </div>
                <div class="level-item notification is-danger has-text-centered">
                    <div>
                    <p class="heading">Outages Last 7 days</p>
                    <p class="title">123</p>
                    </div>
                </div>
                <div class="level-item notification is-info has-text-centered">
                    <div>
                    <p class="heading">Average Router Temperature</p>
                    <p class="title">54.1C(129.4F)</p>
                    </div>
                </div>
                </nav>
                <div class="list is-hoverable">
                <div class="notification is-success">
                    <div class="heading">
                        <span class="">1 Minute ago</span>
                    </div>
                    <div class="title">
                        <span class="">Stable</span>
                    </div>
                    <div class="subtitle-1">
                        <span class="">3.4 Volts</span>
                    </div>
                    <div class="subtitle-2">
                        <span class="">13.4 Amps</span>
                    </div>
                </div>
                <div class="notification is-danger">
                    <div class="heading">
                        <span class="">3 Minutes ago</span>
                    </div>
                    <div class="title">
                        <span class="">Outage</span>
                    </div>
                    <div class="subtitle-1">
                        <span class="">3.4 Volts</span>
                    </div>
                    <div class="subtitle-2">
                        <span class="">13.4 Amps</span>
                    </div>
                </div>
                <div class="notification is-danger">
                    <div class="heading">
                        <span class="">15 Minutes ago</span>
                    </div>
                    <div class="title">
                        <span class="">Outage</span>
                    </div>
                    <div class="subtitle-1">
                        <span class="">3.4 Volts</span>
                    </div>
                    <div class="subtitle-2">
                        <span class="">13.4 Amps</span>
                    </div>
                </div>
              </div>
            </div>
        )
    }
}