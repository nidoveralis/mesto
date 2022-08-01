export class Section {
  constructor({data, renderer}, container) {
    this._items = data;
    this._renderer = renderer;
    this._container = document.querySelector(container);
  };

  renderer(item,id) {
    this._renderer(item,id);
  };

  addItem(item) {
    this._container.prepend(item);
  };
};