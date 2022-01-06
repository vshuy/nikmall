import VueCookies from 'vue-cookies';
const tokenHeader = VueCookies.get('token');
export { tokenHeader };
