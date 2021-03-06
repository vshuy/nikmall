import router from './../router/router';
import VueCookies from 'vue-cookies';
import AppNotification from './AppNotification';
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
    VueCookies.set('token', 'Bearer ' + 'Expired', '720h');
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
    if (localStorage.status_login === 'false') {
     AppNotification.notifyRequireLogin();
      setTimeout(function() {
        router.push('/login');
      }, 3000);
    } else {
      return true;
    }
  }
}
export default new AppCookie();
