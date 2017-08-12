import React, { Component } from 'react';
import { Table,Input,Modal,Spin,Button,Popconfirm  } from 'antd';
import _ from 'lodash';
import '../styles/slide02.css';

class Prop extends Component {

    constructor(props,context) {
        super(props)
    }

    render() {
        return (
            <div className="mainpage">
                <div className="mainContent">
                    <div className="title"><span>Prop</span></div>
                    <ul>
                        <li>
                            <span>Passed down to component from parent component and represents data for the component</span>
                        </li>
                        <li>
                            <span>accessed via this.props</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Prop