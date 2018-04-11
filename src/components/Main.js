import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Grid from './Grid'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/grid' component={Grid} />
        </Switch>
    </main>
)

export default Main
