import { FormValidator } from "../scripts/FormValidator.js";
import { Card } from "../scripts/Card.js";
import { Popup } from "../scripts/Popup.js";
import { PopupWithForm } from "../scripts/PopupWithForm.js";
import { UserInfo } from "../scripts/UserInfo.js";
import { PopupWithImage } from "../scripts/PopupWithImage.js";

const editButton = document.querySelector('.profile-info__edit');
const popupProfile = document.querySelector('.popup-profile');
const formProfile = document.querySelector('.form-profile');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile-info__title');
const profileJob = document.querySelector('.profile-info__subtitle');
const addButton = document.querySelector('.profile__add-button');
const formAddElement = document.querySelector('.form-element');
const popupAddElement = document.querySelector('.popup-elements');
//const titleInput = document.querySelector('.popup__input_type_title');
//const linkInput = document.querySelector('.popup__input_type_link');
const cardsContainer = document.querySelector('.elements');
const templeteElement = document.querySelector('.add-element');
//const popups = document.querySelectorAll('.popup');
const popupImage = document.querySelector('.popup__image');
const popupSubtitle = document.querySelector('.popup__subtitle');
const popupPictire = document.querySelector('.popup-picture');

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
const sectionPopup = {}

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
  const picture = new PopupWithImage(popupPictire, data);
  picture.open();
  picture.setEventListeners();
};

function openForm(form, func) {
  const popupForm = new PopupWithForm(form, func);
  popupForm.open();
  popupForm.setEventListeners();
};

function editProfile(data) {
  openForm(popupProfile, handleProfileFormSubmit);
  const user = new UserInfo(data, {name: profileName, job:profileJob});
  //nameInput.value =  profileName.textContent;
  //jobInput.value =  profileJob.textContent;
  formValidators['personal-info'].resetValidation();
};

function openAddElementForm() {
  openForm(popupAddElement, addCarts);
  formValidators['new-element'].resetValidation();
};

function handleProfileFormSubmit() {
  //const user = new UserInfo(data, {name: profileName, job:profileJob});
  user.setUserInfo()
};

function renderCards(data) {
  data.forEach(item =>addCarts(item));
};

function createCard(elem){
  const card = new Card(elem, templeteElement, handleCardClick);
  const cardElement = card.generationCard();
  return cardElement;
};

function addCarts(elem) {
  const cardElement = createCard(elem)
  prependCardElement(cardElement);
};

function prependCardElement(card) {
  cardsContainer.prepend(card);
};

function closePopup(popup) {
  return sectionPopup[popup].close()
};

renderCards(dataCards);
editButton.addEventListener('click', editProfile);
addButton.addEventListener('click', openAddElementForm);