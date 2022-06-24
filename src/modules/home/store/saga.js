import { put, takeLatest } from 'redux-saga/effects'
import { notification } from 'antd'

import { REQUEST, SUCCESS, FAILURE } from 'Stores'

import { GET_NFT_ALL } from './constants'

import { getNftAllAPI } from 'Apis'

export function* getNftAllSaga({ payload }) {
    try {
        const { code, data } = yield getNftAllAPI(payload)
        const { result: nftAll, ...pagination } = data
        if (code === 200) {
            yield put({
                type: SUCCESS(GET_NFT_ALL),
                payload: {
                    data,
                    pagination,
                    filter: payload?.params?.filter
                }
            })
        }
    } catch (error) {
        yield put({
            type: FAILURE(GET_NFT_ALL),
            error
        })
    }
}

export default function* nftSaga() {
    yield takeLatest(REQUEST(GET_NFT_ALL), getNftAllSaga)
}