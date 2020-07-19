import axios from 'axios';
import store from '../store/index';

export default () => axios.create({
  baseURL: store.state.baseURL,
  timeout: 8000,
  headers: {
    Authorization: `Bearer ${store.state.auth.token}`,
  },
});
