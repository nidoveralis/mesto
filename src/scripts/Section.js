import { Card } from "./Card.js";
export class Section {
  constructor(data, container) {
    this._items = data.items;
    //это функция, которая отвечает за создание и отрисовку данных на странице
    this._renderer = data.renderer;
    this._container = document.querySelector(container);
  };

  //renderItems() {
    //this._items.forEach(item => {
      //this._renderer(item);
    //});
  //}

  renderer() {
    this._element = this._renderer(this._items);
    return this._element;
  };

  addItem() {
    //console.log(this._renderer)
    //this._container.prepend(this.renderItems());
  };
};