class Section {

  constructor({ items, renderer }, selector) {
    this._renderItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  renderItems(items) {
    this._clear();
    items.forEach((item) => {
      this.addItem(item);
    });
  }

  addItem(item) {
    this._container.prepend(this._renderer(item));
  }

  _clear() {
    this._container.innerHTML = '';
  }
}

export default Section;
