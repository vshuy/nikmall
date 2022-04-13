const { detect } = require('detect-browser');
const { UAParser } = require('ua-parser-js');
var mobile = require('is-mobile');
var parser = new UAParser();
let resultDevice = parser.getResult();
const browser = detect();

class IPService {
  async mobileInfo() {
    return mobile() === true ? resultDevice.device : { typeDevice: 'Computer' };
  }
  async saveUserInfo() {
    if (browser) {
      let deviceInfo = await this.mobileInfo();
      const response = await fetch(
        `https://niklab.herokuapp.com/ips/get-detail`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nameOs: browser.os,
            nameBrowser: browser.name,
            screenWidth: window.screen.width,
            screenHeight: window.screen.height,
            mobileInfo: deviceInfo,
          }),
        },
      );
      let result = await response.json();
      return result;
    }
  }
}
export default new IPService();
