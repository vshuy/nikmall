import VueCookies from 'vue-cookies';
class AppCookie {
<<<<<<< HEAD
  setLoginCookie(token, email) {
    localStorage.status_login = true;
    localStorage.user_name = token.user_if.name;
    localStorage.email = email;
    localStorage.user_id = token.user_if.id;
    VueCookies.set('token', 'Bearer ' + token.token, '720h');
    VueCookies.set('user_id', token.user_if.id, '720h');
    VueCookies.set('user_name', token.user_if.name, '720h');
    VueCookies.set('status_login', true, '720h');
=======
  setLoginCookie(token) {
    localStorage.status_login = true;
    VueCookies.set('token', 'Bearer ' + token.token, '720h');
    VueCookies.set('user_id', token.user_if.id, '720h');
    VueCookies.set('user_name', token.user_if.name, '720h');
>>>>>>> refs/remotes/origin/main
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
