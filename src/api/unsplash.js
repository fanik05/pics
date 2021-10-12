import axios from 'axios'

export default axios.create({
    baseURL: process.env.REACT_APP_UNSPLASH_BASE_URL,
    headers: { Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}` }
})