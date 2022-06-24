import { REQUEST } from 'Stores'
import { GET_NFT_ALL } from './constants'

export const getNftAll = (payload) => ({
    type: REQUEST(GET_NFT_ALL),
    payload
})