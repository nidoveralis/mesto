import { FormValidator } from "../scripts/FormValidator.js";
import { Card } from "../scripts/Card.js";
import { Popup } from "../scripts/Popup.js";

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
const titleInput = document.querySelector('.popup__input_type_title');
const linkInput = document.querySelector('.popup__input_type_link');
const cardsContainer = document.querySelector('.elements');
const templeteElement = document.querySelector('.add-element');
const popups = document.querySelectorAll('.popup');
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
    name: "Антверпен, Бельгия",
    link: "./images/Belgium.jpg"
  },
  {
    name: "Кембридж, США",
    link: "./images/Cambridge.jpg"
  },
  {
    name: "Дубай, ОАЭ",
    link: "./images/Dubai_United_Arab_Emirates.jpg"
  },
  {
    name: "Париж, Франция",
    link: "./images/France.jpg"
  },
  {
    name: "Арль, Франция",
    link: "./images/arl.jpg"
  },
  {
    name: "Ротердам, Нидерланды",
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


function handleCardClick(name, link) {
  popupImage.src = link;
  popupImage.alt = name;
  popupSubtitle.textContent = name;
  openPopup(popupPictire);
};

function openPopup(popup) {
  sectionPopup[popup]= new Popup (popup);
  sectionPopup[popup].open();
  sectionPopup[popup].setEventListeners();
};

function editProfile() {
  openPopup(popupProfile);
  nameInput.value =  profileName.textContent;
  jobInput.value =  profileJob.textContent;
  formValidators['personal-info'].resetValidation();
};

function openAddElementForm() {
  openPopup(popupAddElement);
  formAddElement.reset();
  formValidators['new-element'].resetValidation();
};

function handleProfileFormSubmit() {
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
};

function renderCards(data) {
  data.forEach(item =>addCarts(item));
};

function createCard(elem){
  const card = new Card(elem, openPopup, templeteElement, handleCardClick);
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

function handeleAddElementFormSubmit() {
  const newCart = {name: titleInput.value, link: linkInput.value};
  closePopup(popupAddElement);
  addCarts(newCart);
};

function closePopup(popup) {
  return sectionPopup[popup].close()
};

renderCards(dataCards);
editButton.addEventListener('click', editProfile);
formProfile.addEventListener('submit', handleProfileFormSubmit);
addButton.addEventListener('click', openAddElementForm);
formAddElement.addEventListener('submit', handeleAddElementFormSubmit);