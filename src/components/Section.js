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
    //console.log(item)
    this._renderer(item, this._metodAdd);
  };

  addItem(item) {
    this._container.prepend(item);
  };
};