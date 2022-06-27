import { createSelector } from "reselect"
import { initialState } from "./reducer"

const selectNft = (state) => state.nftAll || initialState

const makeNft = () => (
    createSelector(selectNft, (state) => state)
)

export { makeNft, selectNft }