import React, { Component } from 'react';
import { Table,Input,Modal,Spin,Button,Popconfirm  } from 'antd';
import _ from 'lodash';
import '../styles/slide02.css';

class FocusOnView extends Component {

    constructor(props,context) {
        super(props)
    }

    render() {
        return (
            <div className="mainpage">
                <div className="mainContent">
                    <ul>
                        <li>
                            <span>React与Angular不同，它不是完整的MVC框架，只提供清晰、简洁的View层解决方案</span>
                        </li>
                        <li>
                            <span>React把用户界面抽象成单个组件的集合，如按钮Button，对话框Model，日期组件Calendar等等</span>
                        </li>
                        <li>
                            <span>可复用</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default FocusOnView