import React from 'react'
import {reactLogo} from '../img/logo.svg'
import '../styles/bootstrap.min.css'
import '../styles/main.css'
import axios from 'axios'
import image1 from '../img/Image1.jpg'
import image2 from '../img/Image2.jpg'
import image3 from '../img/Image3.jpg'
import image4 from '../img/Image4.jpg'
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

const listCategory = ['Romance', 'Action', 'Fiction', 'Comedy']
// Movie Link
const imagesMovie = [image1, image2, image3, image4]
const movieLink = 'https://api-todofancy.herokuapp.com/api/movies'

class FrontPage extends React.Component{
    handleClick = (category) => {
        console.warn("CLICK TAB", category)
        const self = this;
        const category_axios = category
        axios
            .get(movieLink)
            .then(function(response){
                console.warn('API', response.data.movies[0].Title)
                store.setState({category: category_axios, moviesCollection: response.data.movies, isLoading: false})
                console.warn('CATEGORY', this.props.category)
                console.warn('MASUUUUUK')
                console.warn('CATEGORY', this.props.category)
                console.warn(this.props.category, this.props.moviesCollection)
            })
            .catch(function(response){
                store.setState({isLoading: false})
                console.warn('TES ERROR')
            })
    }
    
    render(){
        console.warn('PROPS', this.props)
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-8 main-page'>
                        <div className='container-fluid'>
                            <div className='row'>
                                {listCategory.map((category, key) => 
                                    <div className='col-md-3'>
                                        <h4 className='h4-title'>{category}</h4>
                                        <img className='image-content' src={imagesMovie[key]}/>
                                        <Link to={'/' + category}><button onClick={() => this.handleClick(category)} type='button' className='button-content btn btn-primary'>See Movies</button></Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2'></div>
                </div>
            </div>
        )
    }
}

export default connect("isLoading, category, moviesCollection", actions)(withRouter(FrontPage));