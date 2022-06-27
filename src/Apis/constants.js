const END_POINT = {
    //nft
    NFT: {
        // nft-collections => { nftColletionsId } search nft collections matching the given conditions
        GET_ALL_NFT: 'nft-collections',
        // nfts => { nftId } get the details of a nft given the nft id
        GET_DETAILS_NFT: (nftId) => `nfts/${nftId}`

    }
}

export default END_POINT