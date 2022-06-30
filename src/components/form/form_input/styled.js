import { Form } from 'antd'
import styled from 'styled-components'

export const FormItemStyled = styled(Form.Item)`
  margin-bottom: 0;
  .ant-input-affix-wrapper {
    height: 56px;
    width: 100%;
    padding: 17px 20px;
    border: 2px solid ${({ theme }) => theme.bd_grey_dark};
  }
`

export const WrapperLabel = styled.div`
  width: 100%;
  font-size: 13px;
`
