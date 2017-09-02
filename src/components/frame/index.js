import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Nav from './Nav.jsx';
import LeftNav from './LeftNav.jsx';
import './style.css';

class Frame extends Component {
    constructor(props) {
        super(props)
        this.state = {
            leftOpen: false
        }
        this.animation = this.animation.bind(this)
    }

    animation(leftOpen) {
        this.setState({
            leftOpen: leftOpen
        })
    }

    render() {
        return (
            <div className="frame">
                <LeftNav animation={this.animation}/>
                <div className="mainPage" style={{paddingLeft:this.state.leftOpen?"300px":"0px", transition:"all 800ms"}}>
                    {
                        React.cloneElement(this.props.children, {
                            key: this.props.location.pathname
                        })
                    }
                </div>
                {/*
                    <section className="header">
                    <Nav/>
                    </section>
                */}
            </div>
        )
    }
}

export default Frame;