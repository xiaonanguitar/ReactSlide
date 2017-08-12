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
                <div style={{padding: "50px 0"}}>
                    {/*<ReactSVG path="../../images/logo.svg" className="logo"/>*/}
                    <img className="logo" src="../../images/reactjs.png"/>
                    <a 
                        href="https://facebook.github.io/react/" 
                        className="mainpage_label" >
                        ReactJS Foundamentals
                    </a>
                </div>
            </div>
        )
    }
}

export default Slide01