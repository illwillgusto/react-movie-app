import axios from 'axios';

let instance = axios.create({
    baseURL: "http://localhost:8080",
});

instance.defaults.headers.common["Authorization"] = localStorage.getItem(
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGI0MzU1ZWExNmU4ZjU0ZTMxNjNjOThmYTY0ZjFjNyIsInN1YiI6IjY2MGFlODY1YTg4NTg3MDE3Y2U1ZmVkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1V18IXIWLUy3J11FA0oOp0fDAkE5gVsc4V5LLEu3fUM"
);

export default instance;