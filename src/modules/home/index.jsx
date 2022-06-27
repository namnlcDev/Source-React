import React, { useState } from 'react'
import { Input, Space, Checkbox } from 'antd'
import HomeLayout from '../layouts/home'
import { LinkIcon, TextNormal, Image, Container } from 'Components'
import { SEARCH_ICON, WELCOME, BG_WELCOME, BG_WELCOME_MOBILE } from 'Assets'
import styled from 'styled-components'
import { useGetNftAll } from 'Hooks'
import { useEffect } from 'react'
import { MEDIA_WIDTHS } from 'Themes'

const Wrapper = styled.div`
  text-align: center;
  min-height: calc(100vh - 48px - 72px);
  background: url(${BG_WELCOME}) center center no-repeat, linear-gradient(0deg, #E9A4A4 -14.33%, #90DDFD 100%);
  background-size: cover;
  width: 100%;
  .search-block {
    margin-top: 306px;
  
    .label {
      margin-top: 64px;
      margin-bottom: 24px;
    }
    form {
      .ant-input-affix-wrapper {
        height: 56px;
        max-width: 640px;
        min-width: 328px;
        padding: 17px 20px;
        border: 2px solid #8E8E8E;
        .ant-input-suffix {
          a {
            padding: 0;
          }
        }
      }
    }
    .checkbox {
      max-width: 640px;
      text-align: left;
      margin: 25px auto 0 auto;
      .ant-checkbox-inner {
        border: 3px solid #D9D9D9;
        background: transparent;
        width: 18px;
        height: 18px;
      }
      .ant-checkbox-checked {
        background: ${({ theme }) => theme.quote_text};
        .ant-checkbox-inner {
          border: 3px solid ${({ theme }) => theme.quote_text}
        }
      }
      span {
        font-size: 20px;
        line-height: 22px;
      }
    }
  }
  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    min-height: calc(100vh - 74px - 162px); // calc height content with subtract header and footer
    background: url(${BG_WELCOME_MOBILE}) center center no-repeat, linear-gradient(0deg, #E9A4A4 -14.33%, #90DDFD 100%);
    background-size: cover;
    .search-block {
      margin-top: 48px;
    }
  }
`

const HomeScreen = () => {
  const [isAvailable, setIsAvailable] = useState(false)

  const {
    isLoading,
    data,
    error,
    getNftAllAction
  } = useGetNftAll()

  useEffect(() => {
    getNftAllAction({ page: 1, limit: 100 })
  }, [])

  const SearchBlock = () => {
    return (
      <Wrapper>

        <Container>
          <div className="search-block">
            <img src={WELCOME} alt="" />
            <div className="label">
              <TextNormal fontSize="size_32" fontWeight="fw_700">Find a NFT Collection</TextNormal>
            </div>
            <form action="">
              <Input type="text" placeholder='Search by keyword...' suffix={<LinkIcon src={SEARCH_ICON} to="" />} />
            </form>
            <div className="checkbox">
              <Checkbox className='cb'>
                NFT Collection
              </Checkbox>
              <Checkbox className="cb">
                NFT Item
              </Checkbox>
            </div>
          </div>
        </Container>
      </Wrapper>
    )
  }

  return (
    <HomeLayout>
      <SearchBlock />
    </HomeLayout>
  )
}

export default HomeScreen