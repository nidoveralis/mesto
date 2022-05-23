let popupProfile = document.querySelector('.popup-profile');
let popupElements = document.querySelector('.popup-elements');
//let popupPicture = document.querySelector('.popup-picture');
let closeProfilePopup = document.querySelector('.popup-profile__button-close');
let closeElementsPopup = document.querySelector('.popup-elements__button-close');
let profileEdit = document.querySelector('.profile-info__edit');
let newElement = document.querySelector('.profile__add-button');
let formProfile = document.querySelector('.form-profile');
let formElement = document.querySelector('.form-element');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let profileName = document.querySelector('.profile-info__title');
let profileJob = document.querySelector('.profile-info__subtitle');
let titleInput = document.querySelector('.popup__input_type_title');
let linkInput = document.querySelector('.popup__input_type_link');

const initialCards = [
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

function openPopup() {
  popupProfile.classList.add('popup_opened');
  nameInput.value =  profileName.textContent;
  jobInput.value =  profileJob.textContent;
};

function closePopup() {
  popupProfile.classList.remove('popup_opened');
};

function openNewElement() {
  popupElements.classList.add('popup_opened');
};

function closeNewElement() {
  popupElements.classList.remove('popup_opened');
};

function formSubmitHandler(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup()
};

function renderCards(data) {
  data.forEach(item =>showCart(item));
};

function showCart(item) {
  const elements = document.querySelector('.elements');
  const templeteElement = document.querySelector('.add-element').content;
  const newElement = templeteElement.cloneNode(true);
  const elementTitle = newElement.querySelector('.element__title');
  const elementImage = newElement.querySelector('.element__image');
  let buttonLike = newElement.querySelector('.element__like');
  let buttonDelete = newElement.querySelector('.element__delete');
  elementTitle.textContent = item.name;
  elementImage.src = item.link;
  buttonLike.addEventListener('click', like);
  buttonDelete.addEventListener('click', deleteElement);
  elementImage.addEventListener('click', popim)
  elements.prepend(newElement);
};

function addElement(e) {
  e.preventDefault();
  let newCart = {name: titleInput.value, link: linkInput.value};
  titleInput.value = '';
  linkInput.value = '';
  closeNewElement();
  showCart(newCart);
};

function like(e) {
  let elementButton = e.target;
  elementButton.classList.toggle('element__like_active');
};

function deleteElement(e) {
  let elementButton = e.target;
  let itemElement = elementButton.closest('.element');
  itemElement.remove();
};

function popim(e) {
  let elementButton = e.target;
  let itemElement = elementButton.closest('.element');
  let itemPicture = itemElement.querySelector('.popup-picture')
  itemPicture.classList.add('popup_opened');
};

window.onload = renderCards(initialCards);
profileEdit.addEventListener('click', openPopup);
newElement.addEventListener('click', openNewElement);
closeProfilePopup.addEventListener('click', closePopup);
closeElementsPopup.addEventListener('click', closeNewElement);
formProfile.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', addElement);