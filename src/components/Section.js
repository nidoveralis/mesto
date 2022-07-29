export class Section {
  constructor({data, renderer}, container) {
    this._items = data;
    this._renderer = renderer;
    this._container = document.querySelector(container);
  };

  renderer(item) {
    this._renderer(item, this._metodAdd);
  };

  addItem(item) {
    this._container.prepend(item);
  };
};