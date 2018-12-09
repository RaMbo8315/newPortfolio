import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';

export default class landing extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div id='Landing'>
                <Link to="/About">
                    <div className="pulsatingCircle">
                        <span className="firstCircle">
                            <p className='text'>About Me</p>
                        </span>
                        <span className="secondCircle"></span>
                        <span className="thirdCircle"></span>
                    </div>
                </Link>
            </div>
        )
    }
}

