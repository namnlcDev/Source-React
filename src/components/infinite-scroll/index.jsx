import { List } from 'antd'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

const InfiniteScrollList = ({ renderItem, skeleton, data }) => {
    return (
        <InfiniteScroll
            dataLength={data?.total}
            loader={skeleton}
        >
            <List
                grid={{
                    gutter: 29,
                    xs: 2,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 4,
                    xxl: 4,
                }}
                dataSource={data}
                renderItem={renderItem}
            />
        </InfiniteScroll>
    )
}

export default InfiniteScrollList