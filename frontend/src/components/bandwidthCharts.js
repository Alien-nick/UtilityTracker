import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

export default class BandwidthCharts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            irregularities: {
                labels: [
                    'Yesterday', '2 Days ago', '3 Days ago', '4 days ago', '5 Days ago', '6 days ago'
                ],
                datasets: [{
                    label: 'Connection',
                    data: [
                        true, false, true, true, true
                    ],
                    backgroundColor: [
                        'rgba(255,99,132,0.6)'
                    ]
                }]
            },
            powerOutage: {
                labels: [
                    '2 Days ago', '3 Days ago', '4 Days ago', '5 Days ago', '6 Days ago', '7 Days ago'
                ],
                datasets: [{
                    label: 'Download Speed',
                    data: [
                       17, 0, 38, 43, 32, 21, 2
                    ],
                    backgroundColor: [
                        'rgba(255,77,66,0.6)'
                    ]
                }]
            }
        }
    }

    render() {
        return (
            <div className="chart">
                <Line
                    data={this.state.irregularities}
                    options={{
                        title: {
                            display: true,
                            text: 'Uptime',
                            fontSize: 25
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                    />

                <Line
                    data={this.state.powerOutage}
                    options={{
                        title: {
                            display: true,
                            text: 'Bandwidth',
                            fontSize: 25
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                    />
            </div>
        );
    }
    }

export { BandwidthCharts };