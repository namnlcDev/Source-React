/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'

import { Header, TextNormal } from '../../components'
// import { makeSelectIsOnline } from '../../routes/store/selectors'

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  background: no-repeat center ${({ theme }) => theme.white};
  background-size: cover;
`
const Body = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  height: 100%;
  flex-direction: column;
  background: ${({ pathname, theme }) => pathname === '/mypage' && theme.bg_yellow_white};
`
const Network = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.error};
  padding: 4px;
`
const HomeLayout = ({ children, isFooter = true, bgImage }) => {
    const { t } = useTranslation()
    const history = useHistory()
    const { pathname } = history.location

    // const isOnline = useSelector(makeSelectIsOnline())
    return (
        <Wrapper bgImage={bgImage}>
            <Header />
            {/* {!isOnline && (
                <Network>
                    <TextNormal color="white">
                        {t('common.network_error')}
                    </TextNormal>
                </Network>
            )} */}
            <Body pathname={pathname}>
                {children}
            </Body>
            {/* {isFooter ? <Footer /> : ''} */}
        </Wrapper>
    )
}

export default HomeLayout
