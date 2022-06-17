import React, { useState } from 'react'
import { Button } from 'antd'
import HomeLayout from '../layouts/home'

const HomeScreen = () => {
  const [isAvailable, setIsAvailable] = useState(false)

  const onClick = () => {
    console.log('res')
  }

  return (
    <HomeLayout>
      <p>Homepage Screen</p>
      <Button onClick={() => onClick()}>
        test
      </Button>
    </HomeLayout>
  )
}

export default HomeScreen