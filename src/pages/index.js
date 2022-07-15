import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { Popup } from "../components/Popup.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Section } from "../components/Section.js";

const editButton = document.querySelector('.profile-info__edit');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const addButton = document.querySelector('.profile__add-button');
const templeteElement = document.querySelector('.add-element');

const objectValid = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'form-error'
}

const dataCards = [
  {
    title: "Антверпен, Бельгия",
    link: "./images/Belgium.jpg"
  },
  {
    title: "Кембридж, США",
    link: "./images/Cambridge.jpg"
  },
  {
    title: "Дубай, ОАЭ",
    link: "./images/Dubai_United_Arab_Emirates.jpg"
  },
  {
    title: "Париж, Франция",
    link: "./images/France.jpg"
  },
  {
    title: "Арль, Франция",
    link: "./images/arl.jpg"
  },
  {
    title: "Ротердам, Нидерланды",
    link: "./images/Rotterdam.jpg"
  },
];

const formValidators = {};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config));
  formList.forEach((formElement) => {
    const formName = formElement.getAttribute('name');
    const validator = new FormValidator(objectValid, formElement);
    formValidators[formName] = validator;
  validator.enableValidation();
  });
};

enableValidation('.popup__form');

function handleCardClick(data) {
  const picture = new PopupWithImage('.popup-picture', data);
  picture.open();
  picture.setEventListeners();
};

const user = new UserInfo({name: '.profile-info__title', job:'.profile-info__subtitle'});

const formUser = new PopupWithForm({
  selector: '.popup-profile',
  handelSubmit: (formData) => {
    user.setUserInfo(formData);
  }
});

const formCard = new PopupWithForm({
  selector: '.popup-elements',
  handelSubmit: (formData) => {
    const newCard = new Section({data: formData, renderer:(item)=>{
      const card = new Card(item, templeteElement, handleCardClick);
      const cardElement = card.generationCard();
      newCard.addItem(cardElement);
    }}, '.elements');
    newCard.renderer();
  }
});

function openForm() {
  formUser.open();
  formUser.showUserInfo(user.getUserInfo())
};

function editProfile() {
  openForm('.popup-profile', handleProfileFormSubmit);
  formValidators['personal-info'].resetValidation();
};

function handleProfileFormSubmit(data) {
  user.setUserInfo(data);
};

function openAddElementForm() {
  formCard.open();
  formValidators['new-element'].resetValidation();
};

function addCardsList(cards) {
  const cardsList = new Section({data: cards, renderer: (cardItem)=>{
    const card = new Card(cardItem, templeteElement, handleCardClick);
    const cardElement = card.generationCard();
    cardsList.addItem(cardElement);
    }}, '.elements');
    
  cardsList.renderItems();
};

addCardsList(dataCards);

editButton.addEventListener('click', editProfile);
addButton.addEventListener('click', openAddElementForm);