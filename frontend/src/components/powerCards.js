import React, { Component } from 'react';
import axios from 'axios';

export default class PowerCards extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cards: {}
        }
    }

    componentDidMount() {
        this.getSummary()
    }

    getSummary() {
        axios.get('http://127.0.0.1:27000/powerlogs/summary')
            .then(res => {
                var data = res.data;
                this.setState({
                    cards: {
                        outages: res.data.outages
                    }
                })
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <div>
                <div className="columns">
                    <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <div className="content">
                                    Hours up
                                <br/>
                                    <span>3hrs</span>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <div className="content">
                                    Outages past week
                                <br/>
                                    <span>{this.state.cards.outages}</span>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <div className="content">
                                    Uptime
                                <br/>
                                <span>50%</span>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <div className="content">
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

export { PowerCards }