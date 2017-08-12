import React, { Component } from 'react';
import { Table,Input,Modal,Spin,Button,Popconfirm  } from 'antd';
import _ from 'lodash';
import '../styles/slide02.css';

class FirstUIComponent extends Component {

    constructor(props,context) {
        super(props)
        this.state = {
            visible: false
        }
        this.showModal = this.showModal.bind(this)
        this.handleOk = this.handleOk.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    showModal() {
        this.setState({
            visible: true,
        });
    }
    handleOk(e) {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleCancel(e) {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    render() {
        return (
            <div className="mainpage">
                <div className="mainContent">
                    <ul>
                        <li>
                            <span>首先加载React库</span>
                        </li>
                        <li>
                            <span>Babel是一个ES6转换为ES5的库</span>
                        </li>
                        <li>
                            <span>注意Script标签的type需要指定为text/Babel</span>
                            <Button type="primary" onClick={this.showModal}>HelloReact</Button>
                        </li>
                    </ul>
                    <img style={{width:"60%"}} className="logo" src="../../images/helloReact.png"/>
                </div>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                    <h1>第一个组件</h1>
                    <iframe src="./components/slides/demo/HelloReact/index.html"></iframe>
                </Modal>
            </div>
        )
    }
}

export default FirstUIComponent