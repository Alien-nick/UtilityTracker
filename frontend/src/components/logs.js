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
            </div>
        )
    }
}