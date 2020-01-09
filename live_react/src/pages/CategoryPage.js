import React from 'react'
import {reactLogo} from '../img/logo.svg'
import '../styles/bootstrap.min.css'
import '../styles/main.css'
import axios from 'axios'
import CategoryPageComponent from '../components/CategoryPageComponent'
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

class CategoryPage extends React.Component{
    render(){
        return (
            <CategoryPageComponent />
        )
    }
}

export default connect("isLogin, isLoading, moviesCollection, category", actions)(withRouter(CategoryPage));