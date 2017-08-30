import React, { Component } from 'react';
import { Table,Input,Modal,Spin,Button,Popconfirm  } from 'antd';
import _ from 'lodash';
import '../styles/slide02.css';

class VirtualDom extends Component {

    constructor(props,context) {
        super(props)
    }

    render() {
        return (
            <div className="mainContent">
                <ul>
                    <li>
                        <span>传统的开发模式需要手动操作DOM，代价昂贵，性能消耗大，代码极难维护</span>
                    </li>
                    <li>
                        <span>React把真实Dom树转换成JavaScript对象树，也就是Virtual DOM Tree</span>
                    </li>
                    <li>
                        <span>每次数据更新后，由Diff算法对比上一次的Virtual Dom，只针对发生变化的部分重新渲染</span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default VirtualDom