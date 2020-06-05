import React, { Component } from 'react';
import { PowerCharts } from './powerCharts';
import { PowerCards } from './powerCards';
import axios from 'axios';
import moment from 'moment';

export default class PowerLogs extends Component {

    constructor() {
        super()
        this.state = {
            offset: 0,
            logs: [],
            data: [],
            perPage: 15,
            currentPage: 0
        }

        this.handlePageClick = this.handlePageClick.bind(this)
    }

    componentDidMount() {
        this.fetchLogs()
    }

    fetchLogs() {
        /* Pagination to be implemented later.
        axios.get('http://127.0.0.1:27000/powerlogs')
            .then(res => {
                this.setState({

                })
            }).catch((error) => {
                console.log(error)
            })
        **/
       axios.get('http://127.0.0.1:27000/powerlogs')
            .then(res => {
                this.setState({
                    data: res.data
                })
                console.log('State: ', this.state.data)
            }).catch((err) => {
                console.log(err)
            })
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.fetchLogs()
        })
    }

    render() {
        return (
        <div className="column">
            <PowerCards/>
                <div className="columns">
                    <div className="column is-mobile is-4">
                    <nav className="panel is-info">
                        <p className="panel-heading">
                            GPL Logs
                        </p>
                        <div className="panel-block">
                            <p className="control has-icons-left">
                            <input className="input" type="text" placeholder="Search"/>
                            <span className="icon is-left">
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </span>
                            </p>
                        </div>
                {(this.state.data.length > 0) ? this.state.data.map((log, index) => {
                    var power = {}
                    log.power === true ? power = {color: 'tag is-success', status: 'Stable' } : power = {color: 'tag is-danger', status: 'Outage'};
                    return (
                    <div>
                        <div className="panel-block">
                            <div className="columns">
                                <div className="column" key={ index }>
                                    <span className="tag is-warning">{moment(log.time).from()}</span>
                                </div>
                                <div className="column">
                                    <h1 className={power.color}>{power.status}</h1>
                                </div>
                                <div className="column">
                                    <h1 className="tag is-primary">{log.voltage} Volts</h1>
                                </div>
                                <div className="column">
                                    <h1 className="tag is-primary">{log.temperature}</h1>
                                </div>
                            
                            </div>
                        </div>
                    </div>)}) : <p>Loading...</p>}
                        <br/>
                        <div className="block">
                        <nav className="pagination is-small">
                            <a className="pagination-previous" disabled>Previous</a>
                            <a href="#" className="pagination-next">Next page</a>
                            <ul className="pagination-list">
                            <li>
                                <a href="#" className="pagination-link is-current">1</a>
                            </li>
                            <li>
                                <a href="#" className="pagination-link">2</a>
                            </li>
                            <li>
                                <a href="#" className="pagination-link">3</a>
                            </li>
                            </ul>
                        </nav>
                        </div>
                      </nav>
                    </div>
                    <div className="column is-8">
                        <PowerCharts/>
                    </div>
                </div>
            </div>
        )
    }
}