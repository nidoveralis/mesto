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
const elements = document.querySelector('.elements');
const templeteElement = document.querySelector('.add-element').content;
///validation

function showError(formElement, inputElement, errorMessage) {
  const spanError = formElement.querySelector(`.${inputElement.id}-error`);
  spanError.textContent = errorMessage;
  formElement.classList.remove('popup__button-save_active')
  spanError.classList.add('form-error')
}

const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};

function isValid(formElement, inputElement, errorMessage) {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, errorMessage);
  } else {
    hideError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__button-save');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      isValid(formElement, inputElement, inputElement.validationMessage);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = (formElement) => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });

  const hasInvalidInput = (inputList)=>{
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  }); 
};

const toggleButtonState=(inputList, buttonElement)=>{
  if(hasInvalidInput(inputList)){
    buttonElement.classList.remove('popup__button-save_active');
  }else{
    buttonElement.classList.add('popup__button-save_active');
  }
}

enableValidation();
////
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

function editProfile() {
  popupProfile.classList.add('popup_opened');
  nameInput.value =  profileName.textContent;
  jobInput.value =  profileJob.textContent;
};

function formSubmitProfile(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeItems(popupProfile);
};

function openNewElement() {
  popupAddElement.classList.add('popup_opened');
};

function renderCards(data) {
  data.forEach(item =>showCart(item));
};

function showCart(item) {
  const newElement = templeteElement.cloneNode(true);
  const elementTitle = newElement.querySelector('.element__title');
  const elementImage = newElement.querySelector('.element__image');
  const popupImage = newElement.querySelector('.popup__image');
  const popupSubtitle = newElement.querySelector('.popup__subtitle');
  const buttonLike = newElement.querySelector('.element__like');
  let buttonDelete = newElement.querySelector('.element__delete');
  let popupPictire = newElement.querySelector('.popup-picture');
  let popupButtonClose = newElement.querySelector('.popup__button-close');
  popupButtonClose.addEventListener('click',closePopup);
  buttonLike.addEventListener('click', ()=> buttonLike.classList.toggle('element__like_active'));
  buttonDelete.addEventListener('click', deleteElement);
  elementImage.addEventListener('click', ()=>popupPictire.classList.add('popup_opened'));
  elementTitle.textContent = item.name;
  elementImage.src = item.link;
  elementImage.alt = item.name;
  popupImage.src = item.link;
  popupImage.alt = item.name;
  popupSubtitle.textContent = item.name;
  showElements(newElement);
};

function showElements(card) {
  elements.prepend(card);
};

function addElement(e) {
  e.preventDefault();
  let newCart = {name: titleInput.value, link: linkInput.value};
  closeItems(popupAddElement);
  showCart(newCart);
  titleInput.value = '';
  linkInput.value = '';
};

function deleteElement(e) {
  let elementButton = e.target;
  let itemElement = elementButton.closest('.element');
  itemElement.remove();
};

document.querySelectorAll('.popup__button-close').forEach((button)=>button.addEventListener('click', closePopup));

function closePopup(event) {
let closeButton = event.target;
let itemElement = closeButton.closest('.popup');
closeItems(itemElement);
};

function closeItems(arg) {
arg.classList.remove('popup_opened');
};

window.onload = renderCards(dataCards);
editButton.addEventListener('click', editProfile);
formProfile.addEventListener('submit', formSubmitProfile);
addButton.addEventListener('click', openNewElement);
formAddElement.addEventListener('submit', addElement);