import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-2fbba.firebaseio.com/'
});

export default instance;