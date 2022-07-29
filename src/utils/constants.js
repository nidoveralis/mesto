import antverpen from "../images/Belgium.jpg";
import kembrij from "../images/Cambridge.jpg";
import dubai from "../images/Dubai_United_Arab_Emirates.jpg";
import paris from "../images/France.jpg";
import arli from "../images/arl.jpg";
import roterdam from "../images/Rotterdam.jpg";

export const editButton = document.querySelector('.profile-info__edit');
export const avatar = document.querySelector('.profile__edit-avatar');
export const addButton = document.querySelector('.profile__add-button');
export const templeteElement = document.querySelector('.add-element');
export const profileAvatar = document.querySelector('.profile__avatar');

export const objectValid = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'form-error'
};

export const dataCards = [
  {
    name: "Антверпен, Бельгия",
    link: antverpen
  },
  {
    name: "Кембридж, США",
    link: kembrij
  },
  {
    name: "Дубай, ОАЭ",
    link: dubai
  },
  {
    name: "Париж, Франция",
    link: paris
  },
  {
    name: "Арль, Франция",
    link: arli
  },
  {
    name: "Ротердам, Нидерланды",
    link: roterdam
  },
];

export const config = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-46',
  headers: {
    authorization: '06e3f763-f2b1-4684-bbaa-5354631af55c',
    'Content-Type': 'application/json'
}
};