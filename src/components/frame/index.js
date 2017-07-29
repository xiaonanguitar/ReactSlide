import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Nav from './Nav.jsx';
import './style.css';
class Frame extends Component {
    render() {
        return (
            <div className="frame">
                <section className="header">
                   <Nav/>
                </section>
                <section className="container">
                    <ReactCSSTransitionGroup
                        transitionName="transitionWrapper"
                        transitionEnterTimeout={1000}
                        transitionLeaveTimeout={1000}>
                        {React.cloneElement(this.props.children, {
                            key: this.props.location.pathname
                        })}
                    </ReactCSSTransitionGroup>
                </section>
            </div>
        )
    }
}

export default Frame;