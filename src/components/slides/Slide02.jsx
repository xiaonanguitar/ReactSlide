import React, { Component } from 'react';
import { Table,Input,Modal,Spin,Button,Popconfirm  } from 'antd';
import _ from 'lodash';
import '../styles/slide02.css';

class Slide02 extends Component {

    constructor(props,context) {
        super(props)
    }

    render() {
        return (
            <div className="mainpage">
                <div className="mainContent">
                    <ul>
                        <li>Summary</li>
                        <li>JSX</li>
                        <li>Component</li>
                        <li>Prop</li>
                        <li>State</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Slide02