import axios from 'axios';

let instance = axios.create({
   baseURL: "https://api.themoviedb.org/3/movie/550?api_key=e0b4355ea16e8f54e3163c98fa64f1c7" 
});

export default instance;