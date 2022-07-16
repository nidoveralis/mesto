export class Section {
  constructor({data, renderer}, container) {
    this._items = data;
    this._renderer = renderer;
    this._container = document.querySelector(container);
  };

  renderItems() {
    this._items.forEach(item => {
      this._renderer(item);
    });
  };

  renderer(item) {
    this._renderer(item);
  };

  addItem(item) {
    this._container.prepend(item);
  };
};