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
};

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

const api = new Api(config);

enableValidation('.popup__form');

function handleCardClick(data) {
  picture.open(data);
};

function createCard(item) {///создаёт карточку
  const card = new Card(item, templeteElement, handleCardClick, handelCardDelete, {activDeleteIcon: (id)=>{
    api.getUser().then((data)=>{
      if(data._id === id){ ///сравнивает id
        card.activeDelete();
      }})
  }}, addLike);
  const cardElement = card.generationCard();
  return cardElement
};

function addLike(id) {
  api.addlike(id).then(data=>console.log(data))
}

const formDeleteCard = new PopupWithForm({popup: '.popup-deleteCard', handelDelete: (id,el)=>{
  api.deleteCard(id)
}})

function handelCardDelete(id, elem) {////отправляет форме данные для удаления
  formDeleteCard.open();
  formDeleteCard.delcard(id,elem);
};

profileAvatar.style.backgroundImage = `url(${avatarImg})`;

const user = new UserInfo({name: '.profile-info__title', about:'.profile-info__subtitle'});
api.getUser().then(data=> {user.setUserInfo({name: data.name, about:data.about})})

const formUser = new PopupWithForm({
  popup: '.popup-profile',
  handelSubmit: (formData) => {
    api.editUser(formData).then((data)=>{
      user.setUserInfo(data);
    });
  }
});

function openProfileForm() {
  formUser.open();
  formUser.setInputValues(user.getUserInfo());
};

api.getInitialCards().then((items)=>{
  items.forEach(item=>{cardsList.renderer(item)})
    cardsList.renderItems();
});

//api.getInitialCards().then((items)=>{
  //items.forEach(item=>{cardsList.renderer(item)})
    //cardsList.renderItems();
//});

const cardsList = new Section({renderer: (cardItem)=>{ 
  cardsList.addItem(createCard(cardItem))}},
   '.elements');

const picture = new PopupWithImage('.popup-picture');

const formCard = new PopupWithForm({
  popup: '.popup-elements',
  handelSubmit: (formData) => {
  api.addNewCard(formData).then((data)=>{cardsList.renderer(data)})
  }
});

function openAddElementForm() {
  formCard.open();
  formValidators['new-element'].resetValidation();
};

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
};

function editProfile() {
  openProfileForm();
  formValidators['personal-info'].resetValidation();
};

///cardsList.renderItems(); 
formUser.setEventListeners();
formCard.setEventListeners();
picture.setEventListeners();
formAvatar.setEventListeners();
formDeleteCard.setEventListeners();

editButton.addEventListener('click', editProfile);
addButton.addEventListener('click', openAddElementForm);
avatar.addEventListener('click', editAvatar)