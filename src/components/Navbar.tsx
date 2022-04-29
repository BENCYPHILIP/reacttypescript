import { Breadcrumb, DatePicker, Layout, Menu } from 'antd'
import { Content, Footer, Header } from 'antd/lib/layout/layout'
import React from 'react'

const Navbar = () => {
  return (
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">Welcome</Menu.Item>
        <Menu.Item key="2">Home</Menu.Item>
        <Menu.Item key="3">About </Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: "0 50px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <DatePicker />
        {/* <UserRecord /> */}
      </div>
    </Content>

    <Footer style={{ textAlign: "center" }}>
      Ant Design Â©2018 Created by Ant UED
    </Footer>
  </Layout>
  )
}

export default Navbar