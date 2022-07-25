import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Section } from "../components/Section.js";
import "./index.css";
import {editButton, avatar, addButton, templeteElement, profileAvatar, objectValid, dataCards} from "../utils/constants.js"
import avatarImg from "../images/imagejack-kysto.jpg"
import { Api } from "../components/Api.js";

const config = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-46',
  headers: {
    authorization: '06e3f763-f2b1-4684-bbaa-5354631af55c',
    'Content-Type': 'application/json'
}
}

profileAvatar.style.backgroundImage = `url(${avatarImg})`;

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
  const card = new Card(item, templeteElement, handleCardClick, {likesCard: (id)=>{
    api.likeCard(id);
  }});
  const cardElement = card.generationCard();
  return cardElement
};

function a(items) {
  const cardsList = new Section({data: items, renderer: (cardItem)=>{ 
    cardsList.addItem(createCard(cardItem)); }}, '.elements');
  cardsList.renderItems();
};

const api = new Api(config);
api.getInitialCards().then((items)=>a(items));

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

const popupDelete = new PopupWithForm({popup: '.popup-deleteCard', handelSubmit: (data)=>{
  console.log(data)
}});

const formCard = new PopupWithForm({
  popup: '.popup-elements',
  handelSubmit: (formData) => {
    a(api.addNewCard(formData));
  }
});

const formAvatar = new PopupWithForm({
  popup: '.popup-avatar',
  handelSubmit: (formData) => {
    console.log(formData)
    //a(api.addNewCard(formData));
  }
});

function openAvatarForm() {
  formAvatar.open();
  //formUser.setInputValues(user.getUserInfo());
};

function editAvatar() {
  openAvatarForm();
  formValidators['personal-info'].resetValidation();
  //formAvatar.setInputValues
}

function openProfileForm() {
  formUser.open();
  formUser.setInputValues(user.getUserInfo());
};

function editProfile() {
  openProfileForm();
  formValidators['personal-info'].resetValidation();
};

function openAddElementForm() {
  formCard.open();
  formValidators['new-element'].resetValidation();
};

///cardsList.renderItems(); 
formUser.setEventListeners();
formCard.setEventListeners();
popupDelete.setEventListeners();
formAvatar.setEventListeners();
editButton.addEventListener('click', editProfile);
addButton.addEventListener('click', openAddElementForm);
avatar.addEventListener('click', editAvatar)