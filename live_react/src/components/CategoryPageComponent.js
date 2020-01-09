import React from 'react'
import {reactLogo} from '../img/logo.svg'
import '../styles/bootstrap.min.css'
import '../styles/main.css'
import axios from 'axios'
import Header from '../components/Header'
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

import { classImplements } from '@babel/types'
import CategoryPage from '../pages/CategoryPage'

const movieLink = 'https://api-todofancy.herokuapp.com/api/movies'

class CategoryPageComponent extends React.Component{
    componentDidMount = () => {
        const self = this;
        console.warn("TES DIDMOUNT", this.props)
        axios
            .get(movieLink)
            .then(function(response){
                store.setState({moviesCollection: response.data.movies, isLoading: false})
            })
            .catch(function(response){
                store.setState({isLoading: false})
                console.warn('TES ERROR')
            })
    }
    
    render(){
        console.warn('MASUK PAGE CATEGORY', this.props.movieCollection)
        
        let movieCollectionRaw = this.props.moviesCollection 

        // Filter
        let movieCollection = movieCollectionRaw.filter(movie => 
            movie.Category = this.props.category    
        )

        const isLoading = this.props.isLoading

        if(true){     
            return (
                <React.Fragment>
                <Header />
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-2'></div>
                        <div className='col-md-8 category-content'>
                            <div className='container-fluid'>
                                    {movieCollection.map(movie => 
                                    <React.Fragment>
                                    <div className='row category-show'>
                                        <div className='col-3 image-category'>
                                            <img src={movie.poster} className='each-image-category'/>
                                        </div>
                                        <div className='col-9 description-category'>
                                            <h4>{movie.Title}</h4>
                                            <p>{movie.Year}</p>
                                            <p>{movie.Synopsis}</p>
                                        </div>
                                    </div>
                                    </React.Fragment>
                                    )}
                            </div>
                        </div>
                        <div className='col-md-2'></div>
                    </div>
                </div>
                </React.Fragment>
            )
        }
        else {
            return (
                <div className='while-loading'>
                    Loading...
                    {/* <div>
                        <img className='loading-image' src={loadingLogo} />
                    </div> */}
                </div>
            )
        }
    }
}

export default connect("isLogin, isLoading, moviesCollection, category", actions)(withRouter(CategoryPageComponent));