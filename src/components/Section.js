export class Section {
  constructor({data, renderer}, container) {
    this._items = data;
    this._renderer = renderer;
    this._container = document.querySelector(container);
  };

  renderItems(items) {
    items.forEach(element => {
      this.renderer(element)
    });
  }

  renderer(item) {
    this._renderer(item);
  };

  addItem(item) {
    this._container.prepend(item);
  };
};