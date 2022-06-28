import React, { useState } from 'react'
import { Dropdown, Menu } from 'antd'
import { ButtonGroup, DropdownItem, DropdownTitle, SortWrapper } from './styled'
import { ButtonImage, TextNormal } from 'Components'
import { GET_LABEL_BY_VALUE } from 'Constants'
import { BG_BUTTON_APPLY, BG_BUTTON_RESET } from 'Assets'

const Sort = () => {
  const [sortValue, setSortValue] = useState({ label: '', key: '' })
  const handleChangeSort = (value) => {
    setSortValue({
      label: GET_LABEL_BY_VALUE[value.key],
      key: value.key
    })
  }

  const onApply = () => {
    console.log('Boy ==> Apply')
  }

  const onReset = () => {
    setSortValue({ label: '', key: '' })
  }

  const dropDownSort = (
    <Menu
      items={[
        {
          label: <DropdownTitle>Sort</DropdownTitle>,
          key: '0'
        },
        {
          label: <DropdownItem>Contract Deployment</DropdownItem>,
          key: 'contract_deployment_at',
          onClick: (value) => handleChangeSort(value)
        },
        {
          label: <DropdownItem>Floor Prize</DropdownItem>,
          key: 'floor_price_wei_24h',
          onClick: (value) => handleChangeSort(value)
        },
        {
          label: <DropdownItem>Total Volume</DropdownItem>,
          key: 'total_volume_wei',
          onClick: (value) => handleChangeSort(value)
        },
        {
          label: <DropdownItem>Volume (24h)</DropdownItem>,
          key: 'volume_wei_24h',
          onClick: (value) => handleChangeSort(value)
        },
        {
          label: <DropdownItem>Exchange Volume Change (24h)</DropdownItem>,
          key: 'exchange_volume_change_24h',
          onClick: (value) => handleChangeSort(value)
        },
        {
          label: <DropdownItem>Market Cap</DropdownItem>,
          key: 'market_cap_wei',
          onClick: (value) => handleChangeSort(value)
        },
        {
          label: <DropdownItem>Relevance</DropdownItem>,
          key: 'relevance *',
          onClick: (value) => handleChangeSort(value)
        },
        {
          label: (
            <ButtonGroup>
              <ButtonImage
                imageButton={BG_BUTTON_APPLY}
                text="Apply"
                fontSize="size_20"
                fontWeight="fw_700"
                onClick={onApply}
              />
              <ButtonImage
                imageButton={BG_BUTTON_RESET}
                text="Reset"
                fontSize="size_20"
                fontWeight="fw_700"
                color="reset_btn"
                onClick={onReset}
              />
            </ButtonGroup>
          ),
          key: '1'
        }
      ]}
    />
  )

  
  return (
    <Dropdown overlay={dropDownSort} trigger={['click']} placement="bottomRight">
      <SortWrapper>
        <TextNormal className="sort__text" fontSize="size_20" fontWeight="fw_400">
          Sort: {sortValue.label}
        </TextNormal>
      </SortWrapper>
    </Dropdown>
  )
}

export default Sort
