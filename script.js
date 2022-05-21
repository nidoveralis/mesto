let popup = document.querySelector('.popup-profile');
let popupNewMesto = document.querySelector('.new-mesto');
let buttonClose = document.querySelector('.popup__button-close');
<<<<<<< Updated upstream:script.js
let profileChanges = document.querySelector('.profile-info__changes');
=======
let buttonCloseMesto = document.querySelector('.popup-mesto__button-close');
let profileEdit = document.querySelector('.profile-info__edit');
>>>>>>> Stashed changes:scripts/indes.js
let form = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input-name');
let jobInput = document.querySelector('.popup__input-job');
let profileName = document.querySelector('.profile-info__title');
let profileJob = document.querySelector('.profile-info__subtitle');
let addButton = document.querySelector('.profile__add-button');
let elements = document.querySelector('.elements');

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
  }
]

function openPopup() {//opening popup and reading input
  popup.classList.add('popup_opened');
  nameInput.value =  profileName.textContent;
  jobInput.value =  profileJob.textContent;
};

function closePopup() {//closing popup
  popup.classList.remove('popup_opened');
};

function openPopupNewMesto() {//opening popup and reading input
  popupNewMesto.classList.add('popup_opened');
  //nameInput.value =
  //jobInput.value = 
};

function closePopupNewMesto() {//closing popup
  popupNewMesto.classList.remove('popup_opened');
};

function formSubmitHandler(e) {//changing profile
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
}

<<<<<<< Updated upstream:script.js
profileChanges.addEventListener('click', openPopup);
=======
initialCards.forEach(function(item){
  newElement(item);
})

function newElement(item) {
  const elementsNew = document.querySelector('.new-elements').content;
  const elems = elementsNew.cloneNode(true);
  const elementImage = elems.querySelector('.new-element__image');
  const elementTitle = elems.querySelector('.new-element__title');
  //elementTitle.textContent = item.name;
  //elementImage.src=item.link;
  elements.append(elems)
}

newElement()
//events
profileEdit.addEventListener('click', openPopup);
addButton.addEventListener('click', openPopupNewMesto);
>>>>>>> Stashed changes:scripts/indes.js
buttonClose.addEventListener('click', closePopup);
buttonCloseMesto.addEventListener('click', closePopupNewMesto);
form.addEventListener('submit', formSubmitHandler);