import axios from 'axios';

const API_KEY = 'e0b4355ea16e8f54e3163c98fa64f1c7';

let instance = axios.create({
   baseURL: 'https://api.themoviedb.org/3'
});

instance.defaults.params = {};
instance.defaults.params['api_key'] = API_KEY;


// let instance = axios.create({
//    baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=e0b4355ea16e8f54e3163c98fa64f1c7' 
// });

export default instance;