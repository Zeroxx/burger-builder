import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-62229.firebaseio.com/'
});

export default instance;