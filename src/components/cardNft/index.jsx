import React from 'react'
import { Wrapper, WrapperSkeleton } from './styled'
import { Skeleton, Card } from 'antd'
import { TextNormal } from 'Components'

const { Meta } = Card

const CardNft = ({
    src,
    name,
    description,
    loading
}) => {
    if (!loading) {
        return (
            <WrapperSkeleton>
                <Skeleton.Input active className="ske-img" />
                <Skeleton.Input active className="ske-txt" />
                <Skeleton.Input active className="ske-txt" />
            </WrapperSkeleton>
        )
    }
    return (
        <Wrapper>
            <div className="container-card">
                <a>
                    <div className="card-nft">
                        <div className="nft-img" style={{ borderRadius: '8px' }} />
                        <TextNormal fontWeight='fw_700' className="nft-name">{name}</TextNormal>
                        <TextNormal color="grey_text" fontSize='size_16' className="nft-desc">{description}</TextNormal>
                    </div>
                </a>
            </div>
        </Wrapper>
    )
}

export default CardNft