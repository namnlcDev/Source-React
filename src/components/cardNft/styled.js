import styled from "styled-components"

export const Wrapper = styled.div`
    border-radius: 8px;
    max-width: 320px;
    /* transition: opacity 200ms ease 0s; */
    transition: transform .2s;
    padding: 1px 1px 3px;
    overflow: hidden;
    position: relative;
    /* color: rgb(244, 238, 255); */
    /* background: rgb(56, 50, 65); */
    .container-card {
        > div {
            border-radius: 8px;
        }
        width: 100%;
        height: 100%;
        overflow: inherit;
        /* background: rgb(39, 38, 44); */
    }
    .card-nft {
        padding: 8px;
        .nft-img {
            border-radius: 8px;
            background-image: url('https://lh3.googleusercontent.com/WDXrdhnfcnSA1jCLe5ceU1FF-QyQCaSENjpChBp5zMoj91boUmUt_xtlAyXysSvpU1lKAb-yD62qUGdSOvyLZdzCyYDIS05ppJQ');
            height: max-content;
            overflow: hidden;
            border-radius: 16px;
            background-repeat: no-repeat;
            background-size: contain;
            max-height: 320px;
            max-width: 320px;
            position: relative;
            width: 100%;
            margin-bottom: 8px;
            &:after {
                content: '';
                display: block;
                padding-top: 100%;
            }
        }
        .nft-name {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 4px;
            margin-bottom: 4px;
        }
        .nft-desc {
            text-align: left;
        }
    }
    &:hover {
        cursor: pointer;
        transform: scale(1.02);
        max-width: 320px;
    }
`

export const WrapperSkeleton = styled.div`
    width: fit-content;
    .ske-img, .ske-txt {
        display: block;
        border-radius: 4px;
    }
    .ske-img {
        max-height: 320px;
        max-width: 320px;
    }
    .ske-txt {
        margin-top: 12px;
        height: 10px;
    }
    
`

