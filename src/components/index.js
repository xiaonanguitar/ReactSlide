import React, { Component } from 'react';
import { Table,Input,Modal,Spin,Button,Popconfirm  } from 'antd';
import { HashRouter, Route, Link } from 'react-router-dom';
import _ from 'lodash';
import './index.css';

import Slide01 from './slides/Slide01.jsx';
import Slide02 from './slides/Slide02.jsx';

class App extends Component {

    constructor(props,context) {
        super(props)
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <Route exact path='/' component={Slide01}/>
                    <Route path='/slide02'  component={Slide02}/>
                </div>
            </HashRouter>
        )
    }
}

export default App