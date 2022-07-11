import { Popup } from "./Popup"

export class PopupWithForm extends Popup{
  constructor(selector, handelSubmit) {
    this._selector = selector;
    this._handleSubmit = handelSubmit;
  };

  _getInputValues(){///собирает данные всех полей формы.

  };

  setEventListeners() {//должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.

  };

  close() {//Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.

  };
};