import React, { Component } from 'react';
import { Table,Input,Modal,Spin,Button,Popconfirm  } from 'antd';
import _ from 'lodash';
import ReactSVG from 'react-svg';
import '../styles/slide01.css';

class Slide01 extends Component {

    constructor(props,context) {
        super(props)
    }

    render() {
        return (
            <div className="mainpage">
                <ReactSVG path="../../images/logo.svg" className="logo"/>
                <label className="mainpage_label" >ReactJS Foundamentals</label>
            </div>
        )
    }
}

export default Slide01