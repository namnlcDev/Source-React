import { createReducer, updateObject, REQUEST, SUCCESS, FAILURE } from 'Stores'
import { GET_NFT_ALL } from './constants'

const nftAll = {
    isLoading: false,
    data: [],
    pagination: {},
    filter: {},
    error: null
}

export const initialState = {
    isLoading: false,
    nftAll: { ...nftAll },
    nftList: [],
    filter: {},
    pagination: {
        page: 1,
        pages: 1,
        total: 0,
        limit: 100
    },
    error: null
}

function loadNftAll(state) {
    return updateObject(state, {
        nftAll: {
            ...state.nftAll,
            isLoading: true
        }
    })
}

function loadNftAllSuccess(state, { payload }) {
    const { data, pagination, filter } = payload
    return updateObject(state, {
        nftAll: {
            ...state.nftAll,
            isLoading: false,
            data,
            pagination,
            filter
        }
    })
}

function loadNftAllFailure(state) {
    return updateObject(state, {
        error: null,
        isLoading: false
    })
}

export default createReducer(initialState, {
    [REQUEST(GET_NFT_ALL)]: loadNftAll,
    [SUCCESS(GET_NFT_ALL)]: loadNftAllSuccess,
    [FAILURE(GET_NFT_ALL)]: loadNftAllFailure
})