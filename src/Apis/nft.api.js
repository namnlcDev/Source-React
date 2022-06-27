import AxiosClient from './api'
import END_POINT from './constants'

function getNftAllAPI({ params }) {
    return AxiosClient.get(END_POINT.NFT.GET_ALL_NFT, '?queries=', { params })
        .then((res) => res.data)
}

export {
    getNftAllAPI
}