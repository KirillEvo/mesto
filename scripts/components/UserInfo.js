export default class UserInfo {
  constructor({ name, about, avatar } ){
    this._name = name;
    this._info = about;
    this._avatar = avatar;
  }

  getUserInfo() {
    return { name: this._name.textContent, about: this._info.textContent };
    // , avatar: this._avatar.src
  }

  setUserInfo(data) {
    this.name = data.name;
    this.info = data.about;
    this.avatar = data.avatar;
    this.id = data._id;
    this._name.textContent = this.name;
    this._info.textContent = this.info;
    if(data.avatar) { this._avatar.src = data.avatar}
  }

  getUserId() {
    return this.id;
  }
}
