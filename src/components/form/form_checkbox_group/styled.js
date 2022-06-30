import { Checkbox, Form } from 'antd'
import styled from 'styled-components'

export const FormItemStyled = styled(Form.Item)`
  margin-bottom: 0;
`

export const WrapperLabel = styled.div`
  width: 100%;
  font-size: 13px;
`

export const CheckboxGroupStyled = styled(Checkbox.Group)`
  .ant-checkbox-wrapper {
    .ant-checkbox-inner {
      border: 3px solid #d9d9d9;
      background: transparent;
      width: 18px;
      height: 18px;
    }
    .ant-checkbox-checked {
      background: ${({ theme }) => theme.quote_text};
      .ant-checkbox-inner {
        border: 3px solid ${({ theme }) => theme.quote_text};
      }
    }
    span {
      font-size: 20px;
      line-height: 22px;
    }
  }
`
