let popupProfile = document.querySelector('.popup-profile');
let popupElements = document.querySelector('.popup-elements');
let closeProfilePopup = document.querySelector('.popup-profile__button-close');
let closeElementsPopup = document.querySelector('.popup-elements__button-close');
let profileEdit = document.querySelector('.profile-info__edit');
let newElement = document.querySelector('.profile__add-button');
let form = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let profileName = document.querySelector('.profile-info__title');
let profileJob = document.querySelector('.profile-info__subtitle');

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

function openPopup() {
  popupProfile.classList.add('popup_opened');
  nameInput.value =  profileName.textContent;
  jobInput.value =  profileJob.textContent;
};

function closePopup() {
  popupProfile.classList.remove('popup_opened');
};

function openNewElement() {
  console.log('jjkgvnkjn')
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
}

initialCards.forEach(item => {
  showCart(item)
});

function showCart(item) {
  const elements = document.querySelector('.elements');
  const templeteElement = document.querySelector('.add-element').content;
  const newElement = templeteElement.cloneNode(true);
  const elementTitle = templeteElement.querySelector('.element__title');
  const elementImage = templeteElement.querySelector('.element__image');
  elementTitle.textContent = item.name;
  elementImage.src = item.link;
  elements.append(newElement)
}

showCart()
profileEdit.addEventListener('click', openPopup);
newElement.addEventListener('click', openNewElement);
closeProfilePopup.addEventListener('click', closePopup);
closeElementsPopup.addEventListener('click', closeNewElement);
form.addEventListener('submit', formSubmitHandler);