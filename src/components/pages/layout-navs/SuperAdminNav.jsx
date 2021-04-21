import { Avatar, Layout, Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import React from 'react';
import { UserOutlined, BookFilled, BookOutlined } from '@ant-design/icons';

const SuperAdminNav = ({ props }) => {
  const { authService } = props;
  return (
    <>
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
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
            <Avatar size={100} gap="5" icon={<UserOutlined />} />
            <Menu.Item key="1" icon={<UserOutlined />}>
              Dashboard
            </Menu.Item>
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
      </Layout>
    </>
  );
};

export default SuperAdminNav;
