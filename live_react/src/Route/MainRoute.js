import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'

// import MainPage from '../pages/MainPage'

class MainRoute extends React.Component {
    render(){
        return (
            <Switch>
                {/* <Route exact path="/" component={MainPage} /> */}
                {/* <Route exact path="/category/:category" component={MainPage} /> */}
            </Switch>
        )
    }
}
export default MainRoute