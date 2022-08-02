import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithDeleteForm } from "../components/PopupWithDeleteForm.js";
import { Section } from "../components/Section.js";
import "./index.css";
import {editButton, avatar, addButton, templeteElement, profileAvatar, objectValid, config} from "../utils/constants.js"
import { Api } from "../components/Api.js";

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

const picture = new PopupWithImage('.popup-picture');

function handleCardClick(data) {
  picture.open(data);
};

function createCard(item, userId) {///создаёт карточку
  const card = new Card(userId._id, item, templeteElement, handleCardClick, 
    {handlerCardDelete: (id, item)=>{
      formDeleteCard.open();
      formDeleteCard.setEventSubmit({data: item, handelSubmit: (element)=>{
        api.deleteCard(id)
        .then(()=> {
          card.removeCard(element);
          formDeleteCard.close();
        })
      }});
    }},  
    {addLike: (id)=>{
      api.addlike(id)
      .then(data=>card.countlike(data))
    }},
    {deleteLike: (id)=>{
      api.deleteLike(id)
      .then(data=>card.countlike(data))
    }}
    )
  const cardElement = card.generationCard();
  return cardElement
};

const formDeleteCard = new PopupWithDeleteForm({popup: '.popup-deleteCard'})

const user = new UserInfo({name: '.profile-info__title', about:'.profile-info__subtitle', avatar: '.profile__avatar'});
api.getUser().then(data=> {user.setUserInfo({name: data.name, about:data.about})})

const formUser = new PopupWithForm({
  popup: '.popup-profile',
  handelSubmit: (formData) => {
    formUser.renderLoading(true);
    api.editUser(formData).then((data)=>{
      user.setUserInfo(data);
      formUser.close();
    })
    .finally(()=>formUser.renderLoading(false));
  }
});

function openProfileForm() {
  formUser.open();
  formUser.setInputValues(user.getUserInfo());
};

Promise.all([ //в Promise.all передаем массив промисов которые нужно выполнить
  api.getUser(),
  api.getInitialCards()
]).then(([userId, items])=>{cardsList.renderItems(items, userId)
});


const cardsList = new Section({renderer: (cardItem, userId)=>{ 
  cardsList.addItem(createCard(cardItem, userId))}},
   '.elements');

const formCard = new PopupWithForm({
  popup: '.popup-elements',
  handelSubmit: (formData) => {
    formCard.renderLoading(true);
      api.addNewCard(formData)
      .then(value=>{
        api.getUser().then(data=>{
          cardsList.renderer(value, data);
        })
        formCard.close();
      })
    .finally(()=>formCard.renderLoading(false));
  }
});

function openAddElementForm() {
  formCard.open();
  formValidators['new-element'].resetValidation();
};

api.showAvatar().then(data=>{
  user.editAvatar(data.avatar)
});

const formAvatar = new PopupWithForm({
  popup: '.popup-avatar',
  handelSubmit: (formData) => {
    formAvatar.renderLoading(true);
    api.editAvatar(formData)
    .then(data=>{
      user.editAvatar(data.avatar);
      formAvatar.close();
    })
    .finally(()=>formAvatar.renderLoading(false));
  }
});

function editAvatar() {
  openAvatarForm();
  formValidators['avatar'].resetValidation();
};

function openAvatarForm() {
  formAvatar.open();
  formAvatar.setInputValues({avatar:profileAvatar.style.backgroundImage.replace(/[\"\(\)\url]/g,"")});
};

function editProfile() {
  openProfileForm();
  formValidators['personal-info'].resetValidation();
};

formUser.setEventListeners();
formCard.setEventListeners();
picture.setEventListeners();
formAvatar.setEventListeners();
formDeleteCard.setEventListeners();

editButton.addEventListener('click', editProfile);
addButton.addEventListener('click', openAddElementForm);
avatar.addEventListener('click', editAvatar);