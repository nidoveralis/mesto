export class Section {
  constructor({data, renderer}, container) {
    this._items = data;
    this._renderer = renderer;
    this._container = document.querySelector(container);
  };

  renderItems(items, id) {
    items.forEach(element => {
      this.renderer(element, id)
    });
  }

  renderer(item,id) {
    this._renderer(item,id);
  };

  addItem(item) {
    this._container.prepend(item);
  };
};