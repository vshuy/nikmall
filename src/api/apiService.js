import VueCookies from 'vue-cookies';
const axios = require('axios');

const categoryApi = axios.create({
  headers: { Authorization: VueCookies.get('token') },
});

const normalApi = axios.create({
  headers: { Authorization: VueCookies.get('token') },
});

const formDataApi = axios.create({
  headers: {
    Authorization: VueCookies.get('token'),
    'Content-Type': 'multipart/form-data',
  },
});

export { categoryApi, normalApi, formDataApi };
