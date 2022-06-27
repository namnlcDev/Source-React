import { useDispatch, useSelector } from "react-redux"

import saga from 'Modules/home/store/saga'
import reducer from 'Modules/home/store/reducer'
import { useInjectReducer, useInjectSaga } from "Stores"
import { makeNft } from "Modules/home/store/selectors"
import { getNftAll } from "Modules/home/store/actions"

export const useGetNftAll = () => {
    useInjectSaga({ key: 'nftAll', saga })
    useInjectReducer({ key: 'nftAll', reducer })

    const dispatch = useDispatch()

    const { data, isLoading, filter, pagination } = useSelector(makeNft())

    const getNftAllAction = (payload) => dispatch(getNftAll(payload))

    return {
        isLoading,
        data,
        filter,
        pagination,
        getNftAllAction
    }
}