import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { divnk } from 'react-router-dom';

export default class about extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div id='About'>
                <div className='container'>
                    <div className="chart">
                        <div id="html" className='flex-space'>
                            <div className="top">
                                <div className="infobox">
                                    <img src='/img/html5-64.png' />
                                    <p>HTML</p>
                                </div>
                            </div>
                            <div className="bottom">
                            </div>
                        </div>
                        <div id="css" className='flex-space'>
                            <div className="top">
                                <div className="infobox">
                                    <img src='/img/css-64.png' />
                                    <p>CSS</p>
                                </div>
                            </div>
                            <div className="bottom">
                            </div>
                        </div>
                        <div id="javascript" className='flex-space'>
                            <div className="top">
                                <div className="infobox">
                                    <img src='/img/javascript-64.png' />
                                    <p>Java<br />Script</p>
                                </div>
                            </div>
                            <div className="bottom">
                            </div>
                        </div>
                        <div id="node" className='flex-space'>
                            <div className="top">
                                <div className="infobox">
                                    <img src='/img/nodejs-64.png' />
                                    <p>Node<br />js</p>
                                </div>
                            </div>
                            <div className="bottom">
                            </div>
                        </div>
                        <div id="react" className='flex-space'>
                            <div className="top">
                                <div className="infobox">
                                    <img src='/img/react-64.png' />
                                    <p>React</p>
                                </div>
                            </div>
                            <div className="bottom">
                            </div>
                        </div>
                        <div id="mysql" className='flex-space'>
                            <div className="top">
                                <div className="infobox">
                                    <img src='/img/mysql.png' />
                                    <p>MySQL</p>
                                </div>
                            </div>
                            <div className="bottom">
                            </div>
                        </div>
                        <div id="mongo" className='flex-space'>
                            <div className="top">
                                <div className="infobox">
                                    <img src='/img/mongo-128.png' />
                                    <p>Mongo<br />DB</p>
                                </div>
                            </div>
                            <div className="bottom">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

