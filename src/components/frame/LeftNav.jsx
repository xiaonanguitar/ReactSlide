import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

class Sider extends React.Component {
  handleClick(e) {
    console.log('click ', e);
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: "100%",margin: "100px 0 50px 0" }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
      >
          <Menu.Item key="5"><Link to="/slide01">首页</Link></Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>React简介</span></span>}>
            <Menu.Item key="7"><Link to="/FocusOnView">专注视图层</Link></Menu.Item>
            <Menu.Item key="9"><Link to="/VirtualDom">Virtual DOM</Link></Menu.Item>
            <Menu.Item key="8"><Link to="/JSExtension">JSX语法</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>React数据流</span></span>}> 
            <Menu.Item key="1"><Link to="/slide04">Prop</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/slide03">State</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="appstore" /><span>React组件</span></span>}>
            <Menu.Item key="12"><Link to="/FirstUIComponent">我们的第一个组件</Link></Menu.Item>
            <SubMenu key="sub4" title="组件间通信">
                <Menu.Item key="10"><Link to="/ParentsToChildren">父子组件通信</Link></Menu.Item>
                <Menu.Item key="13">跨级组件通信</Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" title="生命周期">
                <Menu.Item key="11"><Link to="/LifeCircle">理解React组件的生命周期</Link></Menu.Item>
                <Menu.Item key="14"><Link to="/LifeCircleFlow">完整生命周期流程</Link></Menu.Item>
            </SubMenu>
          </SubMenu>
          <Menu.Item key="16"><Link to="/Summary">结束语</Link></Menu.Item>
      </Menu>
    );
  }
}

class LeftNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openleft: false
        }
        this.dock = this.dock.bind(this);
    }
    dock() {
        this.setState({
            openleft: !this.state.openleft
        })
    }
    render() {
        return (
            <div>
                <div className="leftbarbtn" onClick={()=>this.dock()}>
                    <i className="fa fa-bars fa-3x"></i>
                </div>
                <div className={this.state.openleft?"navbar_left open":"navbar_left close"}>
                    <span className="photo"></span>
                    <Sider/>
                </div>
            </div>
        )
    }
}

export default LeftNav;