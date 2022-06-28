import React, { useEffect, useState } from 'react'
import { Input } from 'antd'
import HomeLayout from '../layouts/home'
import { Sort } from './components'
import { LinkIcon, TextNormal, Container, CheckboxGroup } from 'Components'
import { SEARCH_ICON, WELCOME } from 'Assets'
import { useGetNftAll } from 'Hooks'
import { CheckBoxWrapper, Wrapper } from './styled'

const NFT_OPTIONS = [
  { label: 'NFT Collection', value: 'NFT Collection' },
  { label: 'NFT Item', value: 'NFT Item' }
]

const HomeScreen = () => {
  const [isAvailable, setIsAvailable] = useState(false)

  const { isLoading, data, error, getNftAllAction } = useGetNftAll()

  useEffect(() => {
    getNftAllAction({ page: 1, limit: 100 })
  }, [])

  const onChange = (checkedValues) => {
    console.log('Boy 🚀 ~ file: index.jsx ~ line 24 ~ onChange ~ checkedValues', checkedValues)
  }

  const SearchBlock = () => {
    return (
      <Wrapper>
        <Container>
          <div className="search-block">
            <img src={WELCOME} alt="welcome" />
            <div className="label">
              <TextNormal fontSize="size_32" fontWeight="fw_700">
                Find a NFT Collection
              </TextNormal>
            </div>
            <form action="">
              <Input
                type="text"
                placeholder="Search by keyword..."
                suffix={<LinkIcon src={SEARCH_ICON} to="" />}
              />
              <Sort />
            </form>
            <CheckBoxWrapper>
              <CheckboxGroup options={NFT_OPTIONS} onChange={onChange} />
            </CheckBoxWrapper>
          </div>
        </Container>
        <Container>
          <div className="search-block">
            <img src={WELCOME} alt="welcome" />
            <div className="label">
              <TextNormal fontSize="size_32" fontWeight="fw_700">
                Find a NFT Collection
              </TextNormal>
            </div>
            <form action="">
              <Input
                type="text"
                placeholder="Search by keyword..."
                suffix={<LinkIcon src={SEARCH_ICON} to="" />}
              />
              {/* <Sort /> */}
            </form>
            <CheckBoxWrapper>
              <CheckboxGroup options={NFT_OPTIONS} onChange={onChange} />
            </CheckBoxWrapper>
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
