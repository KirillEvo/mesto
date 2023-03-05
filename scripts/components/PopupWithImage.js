import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popup){
    super(popup);
    this._image = this._popup.querySelector('.popup__image');
    this._imagetext = this._popup.querySelector('.popup__image-text');
  }

 open(name, link) {
  this._image.src = link;
  this._image.alt = name;
  // this._image.setAttribute('alt', link);
  // this._imagetext.setAttribute('alt', name);
  this._imagetext.textContent = name;
  super.open();
 }

}

export default PopupWithImage;
