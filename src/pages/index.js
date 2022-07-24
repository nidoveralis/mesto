import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Section } from "../components/Section.js";
import "./index.css";
import {editButton, addButton, templeteElement, profileAvatar, objectValid, dataCards} from "../utils/constants.js"
import avatar from "../images/imagejack-kysto.jpg"
import { Api } from "../components/Api.js";

const config = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-46',
  headers: {
    authorization: '06e3f763-f2b1-4684-bbaa-5354631af55c',
    'Content-Type': 'application/json'
}
}

profileAvatar.style.backgroundImage = `url(${avatar})`;

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
  picture.open(data);
};

function createCard(item) {
  const card = new Card(item, templeteElement, handleCardClick);
  const cardElement = card.generationCard();
  return cardElement
};

const api = new Api(config);
api.getInitialCards().then((items)=>{
  const cardsList = new Section({data: items, renderer: (cardItem)=>{ 
    cardsList.addItem(createCard(cardItem)); 
    }}, '.elements');
    cardsList.renderItems(); 
});

//const cardsList = new Section({data: dataCards, renderer: (cardItem)=>{ 
  //cardsList.addItem(createCard(cardItem)); 
  //}}, '.elements'); 

const user = new UserInfo({name: '.profile-info__title', job:'.profile-info__subtitle'});
const picture = new PopupWithImage('.popup-picture');
picture.setEventListeners();
const formUser = new PopupWithForm({
  popup: '.popup-profile',
  handelSubmit: (formData) => {
    api.editUser(formData).then((data)=>{
      user.setUserInfo(data);
    });
  }
});

const formCard = new PopupWithForm({
  popup: '.popup-elements',
  handelSubmit: (formData) => {
    //cardsList.renderer(formData);
    api.addNewCard(formData);
  }
});

function editProfile() {
  openProfileForm();
  formValidators['personal-info'].resetValidation();
};

function openProfileForm() {
  formUser.open();
  formUser.setInputValues(user.getUserInfo());
};

function openAddElementForm() {
  formCard.open();
  formValidators['new-element'].resetValidation();
};

///cardsList.renderItems(); 
formUser.setEventListeners();
formCard.setEventListeners();

editButton.addEventListener('click', editProfile);
addButton.addEventListener('click', openAddElementForm);