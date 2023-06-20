import { Content } from 'antd/es/layout/layout'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from '../../pages/Main'

const ContentComponent = () => {
  return (
    <Content style={{ height: '100%' }}
    >
        <Routes>
            <Route path='/' element={<Main />} />
        </Routes>
    </Content>
  )
}

export default ContentComponent