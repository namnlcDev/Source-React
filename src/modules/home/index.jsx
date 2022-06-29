import React, { useEffect, useState } from 'react'
import { Input } from 'antd'
import HomeLayout from '../layouts/home'
import { Sort } from './components'
import { LinkIcon, TextNormal, Container, CheckboxGroup } from 'Components'
import { SEARCH_ICON, WELCOME } from 'Assets'
import { useGetNftAllCollection } from 'Hooks'
import { CheckBoxWrapper, Wrapper } from './styled'
import { useForm } from 'react-hook-form'
import { parseParamsToQueryString } from 'Utils'

const NFT_OPTIONS = [
  { label: 'NFT Collection', value: 'NFT Collection' },
  { label: 'NFT Item', value: 'NFT Item' }
]

const DEFAULT_VALUE = {
  queries: '',
  sorts: []
}

const HomeScreen = () => {
  const [isAvailable, setIsAvailable] = useState(false)

  const form = useForm({
    defaultValues: DEFAULT_VALUE
  })

  const { setValue, handleSubmit, register } = form

  const { isLoading, data, error, getNftAllCollectionAction } = useGetNftAllCollection()

  useEffect(() => {
    getNftAllCollectionAction({ page: 1, limit: 100 })
  }, [])

  const onChange = (checkedValues) => {
    console.log('Boy 🚀 ~ file: index.jsx ~ line 24 ~ onChange ~ checkedValues', checkedValues)
  }

  const onSubmit = (formData) => {
    console.log('Boy ~ file: index.jsx ~ line 47 ~ onSubmit ~ formData', formData)
    const URL = parseParamsToQueryString(formData)
    console.log('Boy ~ file: index.jsx ~ line 48 ~ onSubmit ~ URL', URL)
  }

  const handleOnChangeInput = (e) => {
    setValue('queries', e.target.value)
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
                {...register('queries')}
                type="text"
                placeholder="Search by keyword..."
                suffix={<LinkIcon src={SEARCH_ICON} to="" onClick={handleSubmit(onSubmit)} />}
                onChange={handleOnChangeInput}
              />
              <Sort setValue={setValue} />
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
