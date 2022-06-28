import React, { useState } from 'react'
import { Dropdown, Menu } from 'antd'
import { ButtonGroup, DropdownItem, DropdownTitle, SortWrapper } from './styled'
import { ButtonImage, Image, TextNormal } from 'Components'
import { GET_LABEL_BY_VALUE, SORT_OPTIONS } from 'Constants'
import { BG_BUTTON_APPLY_ACTIVE, BG_BUTTON_APPLY_UN_ACTIVE, BG_BUTTON_RESET, ICON_ARROW_DOWN, ICON_ARROW_UP_LONG } from 'Assets'

const Sort = ({ setValue }) =>
{
  const [sortValues, setSortValues] = useState([])
  const [sortValuesActive, setSortValuesActive] = useState([])
  const [visibleDropdown, setVisibleDropdown] = useState(false)

  const handleSelectSort = (value) =>
  {
    const { key } = value
    let newSortValues = [...sortValuesActive]
    if (newSortValues.includes(key)) {
      const indexKey = newSortValues.findIndex((v) => v === key)
      newSortValues.splice(indexKey, 1)
    } else if (key === 'relevance *') {
      newSortValues = [key]
    } else {
      newSortValues.push(key)
    }
    setSortValuesActive(newSortValues)
  }

  const onApply = () =>
  {
    setSortValues(sortValuesActive)
    setVisibleDropdown(false)
    setValue('sorts', sortValuesActive)
  }

  const onReset = () =>
  {
    setSortValues([])
    setSortValuesActive([])
  }

  const menus = [
    {
      label: <DropdownTitle>Sort</DropdownTitle>,
      key: '0',
      not_sort: true
    },
    ...SORT_OPTIONS,
    {
      label: (
        <ButtonGroup>
          <ButtonImage
            className="btn__apply"
            imageButton={sortValuesActive.length
              ? BG_BUTTON_APPLY_ACTIVE
              : BG_BUTTON_APPLY_UN_ACTIVE}
            text="Apply"
            fontSize="size_20"
            fontWeight="fw_700"
            onClick={sortValuesActive.length ? onApply : null}
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
      key: '1',
      not_sort: true
    }
  ]

  const menuSort = (
    <Menu
      items={menus.map((item) =>
      {
        if (item.not_sort) {
          return {
            label: item.label,
            key: item.key
          }
        }
        if (item.key === 'relevance *') {
          return {
            label:
              <DropdownItem className={`${sortValuesActive.includes(item.key) ? 'active' : ''}`}>
                {item.label}
                <img className="icon__up" src={ICON_ARROW_UP_LONG} alt="icon__up" />
              </DropdownItem>,
            key: item.key,
            onClick: (value) => handleSelectSort(value),
            disabled: sortValuesActive.length === 2
          }
        }
        return {
          label:
            <DropdownItem className={`${sortValuesActive.includes(item.key) ? 'active' : ''}`}>
              {item.label}
              <img className="icon__up" src={ICON_ARROW_UP_LONG} alt="icon__up" />
            </DropdownItem>,
          key: item.key,
          onClick: (value) => handleSelectSort(value),
          disabled: (sortValuesActive.length === 2 && !sortValuesActive.includes(item.key)) || sortValuesActive.includes('relevance *')
        }
      })}
    />
  )

  const onTouchDropdown = () =>
  {
    setVisibleDropdown(!visibleDropdown)
  }

  return (
    <Dropdown overlay={menuSort} trigger={['click']} placement="bottomRight" visible={visibleDropdown}>
      <SortWrapper onClick={onTouchDropdown}>
        <TextNormal className="sort__text" fontSize="size_20" fontWeight="fw_400">
          Sort: {sortValues.map((s, index) => index === 0 ? GET_LABEL_BY_VALUE[s] : `, ${GET_LABEL_BY_VALUE[s]}`)}
        </TextNormal>
        <Image className="icon__down" src={ICON_ARROW_DOWN} alt="icon__down" />
      </SortWrapper>
    </Dropdown>
  )
}

export default React.memo(Sort)
