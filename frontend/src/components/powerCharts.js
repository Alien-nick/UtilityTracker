import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import axios from 'axios';
import moment from 'moment';

export default class PowerCharts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            irregularities: {},
            powerOutage: {}
        }
    }

    componentWillMount() {
        this.getIrregularities();
    }

    getIrregularities() {
        axios.get('http://127.0.0.1:4002/powerlog/charts')
            .then(res => {
                let data = res.data
                let volt = []
                let timeAgo = []
                let status = []

                data.forEach(record => {
                    volt.push(record.voltage)
                    var time = moment(record.time).format("MMMM D YYYY, H:mm:ss")
                    var timeFrom = moment(time).fromNow()
                    timeAgo.push(timeFrom)
                    status.push(record.power)
                })

                this.setState({
                    irregularities:{
                        labels: timeAgo,
                        datasets: [{
                            label: 'Volts',
                            data: volt,
                            backgroundColor: [
                                'rgba(255,99,132,0.6)'
                            ]
                        }]
                    },
                    powerOutage: {
                        labels: timeAgo,
                        datasets: [{
                            label: 'Stable',
                            data: status,
                            backgroundColor: [
                                'rgba(255,77,66,0.6)'
                            ]
                        }]
                    }
                })

            }).catch((error) => {
                console.log(error)
            })
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

export { PowerCharts };