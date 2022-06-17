import styled from 'styled-components'
import { MEDIA_LINKS } from '../../themes'
import { InternalLink } from '../link'

export const Wrapper = styled.div`
    height: 72px;
    width: 100%;
    background-color: ${({ theme }) => theme.primary};
    display: flex;
    align-items: center;
`

export const Left = styled.div`
    width: 40%;
`

export const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 60%;
    font-size: 20px;
    position: relative;
    &:after {
        content: '';
        position: absolute;
        width: 3px;
        height: 50%;
        max-height: 34px;
        top: 0;
        right: 0;
        background-color: red;
    }
`
export const Link = styled(InternalLink)`
`