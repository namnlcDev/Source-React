import React from 'react'
import { Image, LinkIcon } from '../index'
import { Wrapper, Left, Right, Link } from './styled'
import { LOGO_COMPANY } from '../../assets'

const Header = () => {
    return (
        <Wrapper>
            <Left>
                <LinkIcon to="/" className="logo__company" src={LOGO_COMPANY} />
            </Left>
            <Right>
                <Link className="link__page" to="/">
                    askNFTY
                </Link>
                <Link className="link__page" to='/'>
                    About us
                </Link>
                <Link className="link__page" to='/'>
                    Partner with Us
                </Link>
            </Right>
        </Wrapper>
    )
}

export default Header