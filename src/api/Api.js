//import axios
import axios from 'axios'

const Api = axios.create({
    //set default endpoint API
    baseURL: 'https://tenasi.teguhharits.my.id'
})

export default Api