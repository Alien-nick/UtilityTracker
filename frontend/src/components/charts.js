import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

export default class Charts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            irregularities: {
                labels: [
                    '2 Min ago', '3 Min ago', '4 Min ago', '5 Min ago', '6 Min ago', '7 Min ago'
                ],
                datasets: [{
                    label: 'Volts',
                    data: [
                        3.3, 3.2, 3.4, 2.7, 2, 2.9
                    ],
                    backgroundColor: [
                        'rgba(255,99,132,0.6)'
                    ]
                }]
            },
            powerOutage: {
                labels: [
                    '2 Min ago', '3 Min ago', '4 Min ago', '5 Min ago', '6 Min ago', '7 Min ago'
                ],
                datasets: [{
                    label: 'PowerOutage',
                    data: [
                        1, 0, 1, 0, 1, 1, 0
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
                            text: 'High/Low Voltage',
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
                            text: 'Power Outage',
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

export { Charts };