import createStore from 'unistore'
import axios from 'axios'

// News API
const apiKey = '9975f97755874c9fb9b501d61a9cff2a'
const baseUrl = 'https://newsapi.org/v2/'
const urlHeadline = baseUrl + "everything?sources=cnn&apiKey=" + apiKey

const inisialization = {
    isLogin: false,
    category: '',
    isLoading: '',
    moviesCollection: [],
    email: '',
    username: ''
}

export const store = createStore(inisialization)

export const actions = store => (
{
    handleChange: (state, event) => {
        console.warn(event.target.value)
        store.setState({[event.target.name]: event.target.value})
    }
}
)