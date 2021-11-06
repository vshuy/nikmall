import VueCookies from 'vue-cookies';
class AppCookie {
  setLoginCookie(token) {
    localStorage.status_login = true;
    VueCookies.set('token', 'Bearer ' + token.token, '720h');
    VueCookies.set('user_id', token.user_if.id, '720h');
    VueCookies.set('user_name', token.user_if.name, '720h');
  }
  destroyCookie() {
    localStorage.status_login = false;
    VueCookies.set('status_login', false, '720h');
    VueCookies.set('user_id', null, '720h');
  }
  getToken() {
    return VueCookies.get('token');
  }
  isLogin() {
    return localStorage.status_login;
  }
  getUserId() {}
}
export default new AppCookie();
