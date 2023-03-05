export default class UserInfo {
  constructor({ name, info } ){
    this._name = name;
    this._info = info;
  }

  getUserInfo() {
    return { name: this._name.textContent, info: this._info.textContent };
  }

  setUserInfo(data) {
    this.name = data.name;
    this.info = data.info;
    this._name.textContent = this.name;
    this._info.textContent = this.info;
  }
}
