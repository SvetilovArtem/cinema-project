import { Carousel, Row } from 'antd'
import styles from './main.module.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPremieres } from '../redux/slices/mainSlice'

const Main = () => {
  const dispatch = useDispatch()
  const premieres = useSelector(state => state.mainReducer.premieres)

  useEffect(() => {
    const date = { 
      year: 2023,
      month: 'MAY'
     }
    dispatch(getPremieres(date))
  }, [])

  const mainStyles = {
    background: '#001529',
  }
  const carouselStyles = {
    margin: '0 auto',
    width: '50%', 
    height: '100%'
  }
  return (
    <div style={mainStyles}>
      <Carousel autoplay dots={styles.dots} arrows={true} style={carouselStyles}>
        {premieres?.slice(0, 10).map(f => (
          <div style={{ color: '#333' }}>
            <h3 style={{ color: '#333' }}>{f.nameRu}</h3>
            <img 
              src={f.posterUrl}
              alt="" 
              style={{ width: '100%' }}
            />
          </div>
        ))}
      </Carousel>

    </div>

  )
}

export default Main