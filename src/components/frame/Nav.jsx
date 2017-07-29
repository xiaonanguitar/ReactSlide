import React, { Component } from 'react';
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Link = ReactRouter.Link;

class Nav extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <nav>
                <span className="nav">
                    <Link to="/slide01">{"<"}</Link>
                </span>
                <span className="nav">
                    <Link to="/slide02">{">"}</Link>
                </span>
            </nav>
        )
    }
}

export default Nav;