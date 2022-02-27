import router from './../router/router';
import VueCookies from 'vue-cookies';
class AppCookie {
  setLoginCookie(token, email) {
    localStorage.status_login = true;
    localStorage.user_name = token.user_if.name;
    localStorage.email = email;
    localStorage.user_id = token.user_if.id;
    VueCookies.set('token', 'Bearer ' + token.token, '720h');
    VueCookies.set('user_id', token.user_if.id, '720h');
    VueCookies.set('user_name', token.user_if.name, '720h');
    VueCookies.set('status_login', true, '720h');
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
  redirectIfNotLogin() {
    // const status = await localStorage.status_login;
    if (localStorage.status_login === 'false') {
      router.push('/login');
    } else {
      return true;
    }
  }
  getUserId() {}
}
export default new AppCookie();
