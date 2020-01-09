import React from 'react'
import {reactLogo} from '../img/logo.svg'
import '../styles/bootstrap.min.css'
import '../styles/main.css'
import axios from 'axios'
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

const listCategory = ['Romance', 'Action', 'Fiction', 'Comedy']


class Header extends React.Component{
    render(){
        return(
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3 col-sm-12'>
                    <img src={reactLogo} className='react-logo'/><span>Movies</span>
                    </div>
                    <div className='col-md-5 col-sm-12'>
                        <ul className='list-unstyled topic-menu'>
                            <Link to='/'><li><a href=''>Home</a></li></Link>
                            <Link to='/profile'><li><a href=''>Profile</a></li></Link>
                            <Link to='/login'><li><a href=''>Login</a></li></Link>
                        </ul>
                    </div>
                    <div className='col-md-4'></div>
                </div>
            </div>
        )
    }
}

{/* <Link to={'/category/' + category}>{category}</Link> */}
export default connect("isLoading, category", actions)(withRouter(Header));