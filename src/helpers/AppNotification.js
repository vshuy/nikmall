import Vue from 'vue';
class AppNotification {
  notifyRequireLogin() {
    Vue.notify({
      group: 'notify-group',
      title: 'Notification login',
      text:
        'You need to login to use this feature, your will be redirect to login page after three seconds',
      type: 'warn',
      closeOnClick: true,
    });
  }
  notifyRegisterSuccess() {
    Vue.notify({
      group: 'notify-group',
      title: 'Notification login',
      text:
        'Register success, you will be redirect to login page after two seconds',
      type: 'success',
      closeOnClick: true,
    });
  }
  notifyRegisterFail() {
    Vue.notify({
      group: 'notify-group',
      title: 'Register notification',
      text: 'Register fail please check again',
      type: 'error',
      closeOnClick: true,
    });
  }
  notifyLoginSuccess() {
    Vue.notify({
      group: 'notify-group',
      title: 'Notification login',
      text:
        'Login success, you will be redirect to home page after two seconds',
      type: 'success',
      closeOnClick: true,
    });
  }
  notifyLoginFail() {
    Vue.notify({
      group: 'notify-group',
      title: 'Login messenger',
      text: 'Login fail',
      type: 'error',
      closeOnClick: true,
    });
  }
  notifyAdminLoginSuccess() {
    Vue.notify({
      group: 'notify-group',
      title: 'Notification login',
      text:
        'Login success,Welcome admin you will be redirect to Dashboard page after two seconds',
      type: 'success',
      closeOnClick: true,
    });
  }
  notifyLogoutSuccess() {
    Vue.notify({
      group: 'notify-group',
      title: 'Logout notification',
      text: 'Logout successful',
      type: 'success',
      closeOnClick: true,
    });
  }
  notifyAddAnItemToCartSuccess() {
    Vue.notify({
      group: 'notify-group',
      title: 'Cart notification',
      text: 'Add an item successful',
      type: 'success',
      closeOnClick: true,
    });
  }
  notifyRemoveAnItemFromCartSuccess() {
    Vue.notify({
      group: 'notify-group',
      title: 'Cart notification',
      text: 'Remove an item successful',
      type: 'success',
      closeOnClick: true,
    });
  }
  notifyAddCommentSuccess() {
    Vue.notify({
      group: 'notify-group',
      title: 'Comment notification',
      text: 'Your comment has been upload',
      type: 'success',
      closeOnClick: true,
    });
  }
  notifyUpdateCommentSuccess() {
    Vue.notify({
      group: 'notify-group',
      title: 'Comment notification',
      text: 'Your comment has been updated',
      type: 'success',
      closeOnClick: true,
    });
  }
  notifyDeleteCommentSuccess() {
    Vue.notify({
      group: 'notify-group',
      title: 'Comment notification',
      text: 'Your comment has been deleted',
      type: 'success',
      closeOnClick: true,
    });
  }
}
export default new AppNotification();
