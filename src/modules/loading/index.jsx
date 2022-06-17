import { Spin } from 'antd'
import React from 'react'
import { WrapperCenter } from '../../themes/styled'

const LoadingScreen = () => (
    <WrapperCenter>
        <Spin size="large" />
    </WrapperCenter>
)

export default LoadingScreen
