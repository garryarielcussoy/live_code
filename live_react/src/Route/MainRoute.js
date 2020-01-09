import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'

import Home from '../pages/Home'
import CategoryPage from '../pages/CategoryPage'
import Profile from '../pages/Profile'
import Login from '../pages/Login'

class MainRoute extends React.Component {
    render(){
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/:category" component={CategoryPage} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/login" component={Login} />
            </Switch>
        )
    }
}
export default MainRoute