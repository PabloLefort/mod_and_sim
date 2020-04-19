import axios from 'axios';

// data api calls
export const getData = () => {
    return axios.get('https://www.mocky.io/v2/5e9cc58d30000057000a7f94')
}
export const createPost = ({post}) => {
    console.log("api call ->", post)
    let randomId = Math.random()*100;
    return axios.post('https://www.mocky.io/v2/5e9cc58d30000057000a7f94', {"id":randomId, "msg": post + randomId})
}