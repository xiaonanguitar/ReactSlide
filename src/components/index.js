import React, { Component } from 'react';
import { Table,Input,Modal,Spin,Button,Popconfirm  } from 'antd';
import _ from 'lodash';
import './index.css';
import Frame from './frame';
import Slide01 from './slides/Slide01.jsx';
import Slide02 from './slides/Slide02.jsx';
import Slide03 from './slides/Slide03.jsx';

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Link = ReactRouter.Link;

class App extends Component {

    constructor(props,context) {
        super(props)
    }

    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Frame}>
                    <IndexRoute component={Slide01}/>
                    <Route path="/slide01" component={Slide01}/>
                    <Route path="/slide02" component={Slide02}/>
                    <Route path="/slide03" component={Slide03}/>
                </Route>
            </Router>
        )
    }
}

export default App