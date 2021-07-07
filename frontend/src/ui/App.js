import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './pages/Home'

import React from 'react'
import {Profile} from "./pages/Profile";
import {Shop} from "./pages/Shop";
import AnimationScene from "./AnimationScene";


export const App = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/profile' component={Profile} />
                <Route exact path='/shop' component={Shop} />
                <Route exact path='/animationscene' component={AnimationScene} />
            </Switch>
        </BrowserRouter>
    </>
)
