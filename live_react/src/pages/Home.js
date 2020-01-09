import React from 'react'
import {reactLogo} from '../img/logo.svg'
import '../styles/bootstrap.min.css'
import '../styles/main.css'
import Header from '../components/Header'
import FrontPage from '../components/FrontPage'
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Header />
                <FrontPage />
            </React.Fragment>
        )
    }
}

{/* <Link to={'/category/' + category}>{category}</Link> */}

export default connect("isLoading, category, moviesCollection", actions)(withRouter(Home));