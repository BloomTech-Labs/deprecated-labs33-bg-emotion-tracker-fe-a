import React from 'react';
// import { Button } from '../../common';
// import { Link } from 'react-router-dom';
import { Layout, Menu, Avatar } from 'antd';
import { UserOutlined, BookFilled, BookOutlined } from '@ant-design/icons';
 
 
const { Content, Sider } = Layout;
 
const layoutTemplate = (props) => {
  const { userInfo, authService } = props;
  return (
    <div>
      <Layout>
        <Sider
          breakpoint="lg"
          width="250"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
            <Avatar size={100} gap="5" icon={<UserOutlined />} />
            <Menu.Item key="1" icon={<UserOutlined />}> 
              Program Management
            </Menu.Item>
            <Menu.Item key="2" icon={<BookOutlined />}>
              Member Management
            </Menu.Item>
            <Menu.Item key="3" icon={<BookFilled />}>
              Club Management
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              QR Generator
            </Menu.Item>
            <Menu.Item key="5" onClick={() => authService.logout()}>
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
 
        <Layout>
          <Content style={{ margin: '24px 16px 0', minHeight: '100vh'}}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 100 }}
            >
              <h1>Hi {userInfo.name} Welcome to Labs Basic SPA</h1>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default layoutTemplate;