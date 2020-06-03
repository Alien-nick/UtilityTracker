import React, { Component } from 'react';

export default class BackEndForm extends Component {
    render() {
        return (
            <div class="columns is-mobile is-centered">
                <div class="column is-half">
                    <section class="hero is-link">
                        <div class="hero-body">
                            <div class="container">
                            <h1 class="title">
                                Setup Environment
                            </h1>
                            </div>
                        </div>
                    </section>
                    <div class="column">
                        <div class="field">
                            <label class="label">Router username</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Router username"/>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Router Password</label>
                            <div class="control">
                                <input class="input" type="password" placeholder="Router password"/>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Router URL</label>
                            <div class="control">
                                <input class="input" type="password" placeholder="Router url"/>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Slack Webhook</label>
                            <div class="control">
                                <input class="input" type="password" placeholder="Slack Webhook"/>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Your name</label>
                            <div class="control">
                                <input class="input" type="password" placeholder="Your name"/>
                            </div>
                        </div>

                        <div class="field is-grouped">
                            <div class="control">
                                <button class="button is-link">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}