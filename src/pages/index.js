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
      }})}}, 
    {addLike: (id, likes)=> {///добавляет лайки и возвращает их колличество
      api.getUser().then(data=>{
        likes.forEach(like=>{
          if(like._id === data._id){
            api.deleteLike(id).then(data=>{card.countlike(data.likes.length)})
          }else{
            api.addlike(id).then(data=>{card.countlike(data.likes.length)})
          }
        })
      })
   // 
    }})
  const cardElement = card.generationCard();
  return cardElement
};

const formDeleteCard = new PopupWithForm({popup: '.popup-deleteCard', handelDelete: (id,el)=>{
  api.deleteCard(id)
}})

function handelCardDelete(id, elem) {////отправляет форме данные для удаления
  formDeleteCard.open();
  formDeleteCard.delcard(id,elem);
};

api.showAvatar().then(data=>{
  profileAvatar.style.backgroundImage = `url(${data.avatar})`;
});

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
    api.editAvatar(formData).then(data=>{
      profileAvatar.style.backgroundImage = `url(${data.avatar})`;
    })
  }
});

function openAvatarForm() {
  formAvatar.open();
  formAvatar.setInputValues({avatar:profileAvatar.style.backgroundImage.replace(/[\"\(\)\url]/g,"")});
};

function editAvatar() {
  openAvatarForm();
  formValidators['avatar'].resetValidation();
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