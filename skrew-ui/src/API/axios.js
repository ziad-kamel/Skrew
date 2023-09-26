import axios from 'axios';
import config from '../config';
const axiosInstance = axios.create({
    baseURL: `${config.BASE_URL}:${config.SERVER_PORT}`
  });



  export default axiosInstance;
