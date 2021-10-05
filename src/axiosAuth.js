import axios from 'axios'
import { BACKEND_DEV_URL } from './constants';

const instance = axios.create({
    baseURL: BACKEND_DEV_URL
});

export default instance;