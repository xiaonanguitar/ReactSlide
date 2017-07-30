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
        style={{ width: "100%",margin: "50px 0" }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
          <Menu.Item key="5"><Link to="/slide01">Home</Link></Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>Outline</span></span>}>
          <MenuItemGroup key="g1" title="Data Flow">
            <Menu.Item key="1"><Link to="/slide02">Prop</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/slide03">State</Link></Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup key="g2" title="Component">
            <Menu.Item key="3">Comunication</Menu.Item>
            <Menu.Item key="4">Life Circle</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
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
                    <Sider/>
                </div>
            </div>
        )
    }
}

export default LeftNav;