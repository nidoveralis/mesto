import { FormValidator } from "../scripts/FormValidator.js";
import { Card } from "../scripts/Card.js";
import { Popup } from "../scripts/Popup.js";
import { PopupWithForm } from "../scripts/PopupWithForm.js";
import { UserInfo } from "../scripts/UserInfo.js";
import { PopupWithImage } from "../scripts/PopupWithImage.js";
import { Section } from "../scripts/Section.js";

const editButton = document.querySelector('.profile-info__edit');
const popupProfile = document.querySelector('.popup-profile');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile-info__title');
const profileJob = document.querySelector('.profile-info__subtitle');
const addButton = document.querySelector('.profile__add-button');
const popupAddElement = document.querySelector('.popup-elements');
const templeteElement = document.querySelector('.add-element');
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

function editProfile() {
  openForm(popupProfile, handleProfileFormSubmit);
  const user = new UserInfo({name: profileName, job:profileJob});
  ///что-то не понятное, но рабочее
  nameInput.value =  user.getUserInfo().name;//
  jobInput.value =  user.getUserInfo().job;//
  //handleProfileFormSubmit(user);
  formValidators['personal-info'].resetValidation();
};

function handleProfileFormSubmit(data) {
  console.log('инпуты', data)
};

function a(selector, vall) {
  selector.textContent = vall;
}

function openAddElementForm() {
  openForm(popupAddElement, newC);
  formValidators['new-element'].resetValidation();
};

//function renderCards(data) {
  //data.forEach(item =>newC(item));
//};

function createCard(elem){
  const card = new Card(elem, templeteElement, handleCardClick);
  const cardElement = card.generationCard();
  console.log(cardElement)
  return cardElement;
};

function newC(cards) {
  const cardList = new Section({items: cards, renderer: (card)=>{
    const cardi = new Card(card, templeteElement, handleCardClick);
    const cardElement = cardi.generationCard();
    console.log(cardElement)
    //return cardElement;
    }}, '.elements')
  cardList.addItem();
};

newC(dataCards)

//function addCarts(elem) {
  //const cardElement = createCard(elem);
  //prependCardElement(cardElement);
//};

//function prependCardElement(card) {
  //cardsContainer.prepend(card);
//};

//function closePopup(popup) {
  //return sectionPopup[popup].close()
//};

//renderCards(dataCards);
editButton.addEventListener('click', editProfile);
addButton.addEventListener('click', openAddElementForm);