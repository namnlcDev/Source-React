import React, { useState } from 'react'
import { Dropdown, Menu, Slider } from 'antd'
import { ButtonImage, Image, TextNormal } from 'Components'
import {
  FILTER_OPTIONS_NFT_COLLECT,
  FILTER_OPTIONS_NFT_ITEM,
  GET_LABEL_BY_VALUE,
  NFT_KEYS
} from 'Constants'
import { BG_BUTTON_APPLY_ACTIVE, BG_BUTTON_APPLY_UN_ACTIVE, BG_BUTTON_RESET, ICON_ARROW_DOWN } from 'Assets'
import { ButtonGroup, CollapseStyled, DropdownTitle, DropdownWrapper } from './styled'

const { Panel } = CollapseStyled

const Filter = ({ nft, filters, setValue }) => {
  const [filtersActive, setFiltersActive] = useState([])
  const [visibleDropdown, setVisibleDropdown] = useState(false)

  const onApply = () => {
    setVisibleDropdown(false)
    setValue('filters', filtersActive)
  }

  const onReset = () => {
    setFiltersActive([])
    setValue('filters', filtersActive)
  }

  const baseMenu = (options) => [
    {
      label: <DropdownTitle>Filter</DropdownTitle>,
      key: '0',
      not_filter: true
    },
    ...options,
    {
      label: (
        <ButtonGroup>
          <ButtonImage
            className="btn__apply"
            imageButton={filtersActive.length ? BG_BUTTON_APPLY_ACTIVE : BG_BUTTON_APPLY_UN_ACTIVE}
            text="Apply"
            fontSize="size_20"
            fontWeight="fw_700"
            onClick={filtersActive.length ? onApply : null}
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
      not_filter: true
    }
  ]

  const menus = baseMenu(
    nft[0] === NFT_KEYS.NFT_COLLECTION ? FILTER_OPTIONS_NFT_COLLECT : FILTER_OPTIONS_NFT_ITEM
  )

  const menuFilter = (
    <Menu
      triggerSubMenuAction="click"
      items={menus.map((item, index) => {
        if (item.not_filter) {
          return {
            label: item.label,
            key: item.key
          }
        }
        return {
          label: (
            <CollapseStyled
              onChange={(key) => console.log(key)}
              expandIcon={({ isActive }) => (
                <img
                  style={{ transform: isActive && 'rotate(180deg)' }}
                  className="icon__expand"
                  src={ICON_ARROW_DOWN}
                  alt="icon"
                />
              )}
              ghost
            >
              <Panel header={item.label} key="1">
                <Slider min={0} max={100} />
              </Panel>
            </CollapseStyled>
          ),
          key: item.key
        }
      })}
    />
  )

  const onTouch = () => setVisibleDropdown(!visibleDropdown)

  return (
    <>
      <Dropdown overlay={menuFilter} trigger={['click']} placement="bottomRight" visible={visibleDropdown}>
        <DropdownWrapper onClick={onTouch}>
          <TextNormal className="dropdown__value" fontSize="size_20" fontWeight="fw_400">
            Filter:{' '}
            {filters.map((s, index) => (index === 0 ? GET_LABEL_BY_VALUE[s] : `, ${GET_LABEL_BY_VALUE[s]}`))}
          </TextNormal>
          <Image className="icon__down" src={ICON_ARROW_DOWN} alt="icon__down" />
        </DropdownWrapper>
      </Dropdown>
    </>
  )
}

export default Filter
