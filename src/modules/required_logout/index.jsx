import React from 'react'
import { BoxError } from 'Components'
import AuthLayout from '../layouts/auth'
import { Wrapper, Body } from './styled'

const RequiredLogoutScreen = () => {
  return (
    <AuthLayout isFooter={false}>
      <Wrapper>
        <Body>
          <BoxError title="common.required_logout" />
        </Body>
      </Wrapper>
    </AuthLayout>
  )
}


export default RequiredLogoutScreen
