import { PublicRoute, PrivateRoute, StrictRoute, CustomRoute } from '../components'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'

import { useInjectReducer } from '../store'
import { checkNetwork } from './store/actions'

import reducer from './store/reducer'

//screen
import HomeScreen from '../modules/home'
import LoadingScreen from '../modules/loading'

export default function AppRoutes({ isOnline = true }) {
    // useInjectReducer({ key: 'globalStore', reducer })
    const dispatch = useDispatch()

    // useEffect(async () => {
    //     dispatch(checkNetwork(isOnline))
    // }, [isOnline])

    return (
        <Switch>
            <CustomRoute
                path="/loading"
                component={LoadingScreen}
            />
            <PublicRoute
                path="/"
                component={HomeScreen}
            />
        </Switch>
    )
}