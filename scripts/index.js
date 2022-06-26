import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";

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

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeEsc);
  closeOverlay(popup);

};

function editProfile() {
  openPopup(popupProfile);
  nameInput.value =  profileName.textContent;
  jobInput.value =  profileJob.textContent;
  //validInut(popupProfile, 'popup__input_error');
  new FormValidator(dataCards, popupProfile)
};

function openAddElementForm() {
  openPopup(popupAddElement);
};

function handleProfileFormSubmit(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
};

function renderCards(data) {
  data.forEach(item =>addCarts(item));
};

function addCarts(elem) {
  const card = new Card(elem, openPopup);
  const cardElement = card.generationCard();
  prependCardElement(cardElement);
};

function prependCardElement(card) {
  cardsContainer.prepend(card);
};

function handeleAddElementFormSubmit(e) {
  e.preventDefault();
  const newCart = {name: titleInput.value, link: linkInput.value};
  closePopup(popupAddElement);
  addCarts(newCart);
  formAddElement.reset();
  disableButton(formAddElement.querySelector('.popup__button-save'), 'popup__button-save_disabled');
};

document.querySelectorAll('.popup__button-close').forEach((button)=>button.addEventListener('click', closePopupByButton));

function closePopupByButton(e) {
  const closeButton = e.target;
  const itemElement = closeButton.closest('.popup');
  closePopup(itemElement);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeEsc);
};

function closeOverlay(item) {
  item.addEventListener('click',(e)=>{
    const popupOverlay = e.target;
    closePopup(popupOverlay);
  });
};

function closeEsc(e) {
  const popupOpen = document.querySelector('.popup_opened');
  if(e.key === 'Escape') {
    closePopup(popupOpen);
  };
};

window.onload = renderCards(dataCards);
//enableValidation(objectValid);
editButton.addEventListener('click', editProfile);
formProfile.addEventListener('submit', handleProfileFormSubmit);
addButton.addEventListener('click', openAddElementForm);
formAddElement.addEventListener('submit', handeleAddElementFormSubmit);