import { Layout } from 'antd';
import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import ContentComponent from '../ContentComponent/ContentComponent';
import HeaderComponent from '../Header/Header';

const LayoutComponent = () => {
    const { Footer } = Layout;
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <HeaderComponent />
        <Layout style={{ minHeight: '75vh' }}>
          <ContentComponent />
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  )
}

export default LayoutComponent