import antverpen from "../images/Belgium.jpg";
import kembrij from "../images/Cambridge.jpg";
import dubai from "../images/Dubai_United_Arab_Emirates.jpg";
import paris from "../images/France.jpg";
import arli from "../images/arl.jpg";
import roterdam from "../images/Rotterdam.jpg";

export const editButton = document.querySelector('.profile-info__edit');
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
    title: "Антверпен, Бельгия",
    link: antverpen
  },
  {
    title: "Кембридж, США",
    link: kembrij
  },
  {
    title: "Дубай, ОАЭ",
    link: dubai
  },
  {
    title: "Париж, Франция",
    link: paris
  },
  {
    title: "Арль, Франция",
    link: arli
  },
  {
    title: "Ротердам, Нидерланды",
    link: roterdam
  },
];