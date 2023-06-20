import { Row } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React from 'react'

const HeaderComponent = () => {
  return (
    <Header>
    <Row>
      <span style={{ color: '#1677ff' }}>
        Лаборатория КИНО
      </span>
    </Row>
    </Header>

  )
}

export default HeaderComponent