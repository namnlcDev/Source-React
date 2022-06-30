import { SEARCH_ICON } from 'Assets'
import { FormCheckboxGroup, FormInput } from 'Components'
import { NFT_KEYS, NFT_OPTIONS } from 'Constants'
import React from 'react'
import { FormProvider, useForm, useFieldArray } from 'react-hook-form'
import { parseParamsToQueryString } from 'Utils'
import { FilterBlockSchema } from './schema'
import { SearchWrapper } from './styled'
import { yupResolver } from '@hookform/resolvers/yup'
import { Filter, Sort } from './components'

const DEFAULT_VALUE = {
  queries: '',
  filters: [],
  sorts: [],
  nft: [NFT_KEYS.NFT_COLLECTION]
}

const FilterBlock = () =>
{
  const form = useForm({
    defaultValues: DEFAULT_VALUE,
    resolver: yupResolver(FilterBlockSchema())
  })
  const { handleSubmit, setValue, watch, control } = form
  const { fields: fieldsFilter, append: appendFilter } = useFieldArray({
    control,
    name: "filters"
  })

  const { fields: fieldsSort, append: appendSort } = useFieldArray({
    control,
    name: "sorts"
  })

  const [sorts, filters, nft] = watch(['sorts', 'filters', 'nft'])

  const onSubmit = (formData) =>
  {
    const params = {
      queries: {
        collection_name__OR__description: formData.collection_name__OR__description
      },
      filters: [
        { floor_price_quote_7d: '73.5 73.52' },
        { volume_wei_24h: '900000' }
      ],
      sorts: formData.sorts
    }
    const queryStr = parseParamsToQueryString(params)
    alert(queryStr)
  }

  const onSelectNFT = (checkedValues) =>
  {
    console.log(' ~ file: index.jsx ~ line 24 ~ onChange ~ checkedValues', checkedValues)
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SearchWrapper>
          <FormInput
            name="collection_name__OR__description"
            placeholder="Search by keyword..."
            suffix={<img onClick={handleSubmit(onSubmit)} src={SEARCH_ICON} alt="icon-search" />}
          />
          <div className="checkbox__wrapper">
            <FormCheckboxGroup
              defaultValue={[NFT_KEYS.NFT_COLLECTION]}
              name="nft"
              options={NFT_OPTIONS}
              onChange={onSelectNFT}
            />
          </div>
        </SearchWrapper>
        <Filter nft={nft} filters={filters} setValue={setValue} fieldsFilter={fieldsFilter} appendFilter={appendFilter} />
        <Sort nft={nft} sorts={sorts} setValue={setValue} fieldsSort={fieldsSort} appendSort={appendSort} />
      </form>
    </FormProvider>
  )
}

export default FilterBlock
