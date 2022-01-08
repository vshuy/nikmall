import VueCookies from 'vue-cookies';
const axios = require('axios');

const categoryApi = axios.create({
  headers: { Authorization: VueCookies.get('token') },
});

const normalApi = axios.create({
  headers: { Authorization: VueCookies.get('token') },
});

const formdataApi = axios.create({
  headers: { Authorization: VueCookies.get('token') },
});

export { categoryApi, normalApi, formdataApi};
