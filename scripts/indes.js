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
const templeteElement = document.querySelector('.add-element').content;
const popupImage = document.querySelector('.popup__image');
const popupSubtitle = document.querySelector('.popup__subtitle');
const popupPictire = document.querySelector('.popup-picture');
const popupButtonClose = document.querySelector('.popup__button-close');

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

function popupOpen(popup) {
  popup.classList.add('popup_opened');
}

function editProfile() {
  popupOpen(popupProfile);
  nameInput.value =  profileName.textContent;
  jobInput.value =  profileJob.textContent;
};

function openAddElementForm() {
  titleInput.value="";
  linkInput.value="";
  popupOpen(popupAddElement);
}

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
  prependCardElement(createCard(elem));
}

function like(button) {
  button.classList.toggle('element__like_active');
};

function createCard(item) {
  const newElement = templeteElement.cloneNode(true);
  const elementTitle = newElement.querySelector('.element__title');
  const elementImage = newElement.querySelector('.element__image');
  const buttonLike = newElement.querySelector('.element__like');
  const buttonDelete = newElement.querySelector('.element__delete');
  buttonLike.addEventListener('click', ()=>like(buttonLike));
  buttonDelete.addEventListener('click', deleteElement);
  elementImage.addEventListener('click', ()=>{
    popupOpen(popupPictire); 
    popupImage.src = item.link;
    popupImage.alt = item.name;
    popupSubtitle.textContent = item.name;
  });
  elementTitle.textContent = item.name;
  elementImage.src = item.link;
  elementImage.alt = item.name;
  return newElement
};

function prependCardElement(card) {
  cardsContainer.prepend(card);
};

function handeleAddElementFormSubmit(e) {
  e.preventDefault();
  let newCart = {name: titleInput.value, link: linkInput.value};
  closePopup(popupAddElement);
  addCarts(newCart);
  formAddElement.reset();
};

function deleteElement(e) {
  let elementButton = e.target;
  let itemElement = elementButton.closest('.element');
  itemElement.remove();
};

document.querySelectorAll('.popup__button-close').forEach((button)=>button.addEventListener('click', closePopupByButton));

function closePopupByButton(event) {
let closeButton = event.target;
let itemElement = closeButton.closest('.popup');
closePopup(itemElement);
};

function closePopup(popup) {
popup.classList.remove('popup_opened');
};

window.onload = renderCards(dataCards);
editButton.addEventListener('click', editProfile);
formProfile.addEventListener('submit', handleProfileFormSubmit);
addButton.addEventListener('click', openAddElementForm);
formAddElement.addEventListener('submit', handeleAddElementFormSubmit);