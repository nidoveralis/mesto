let popup = document.querySelector('.popup');
let buttonClose = document.querySelector('.popup__button-close');
let profileChanges = document.querySelector('.profile-info__changes');
let form = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input-name');
let jobInput = document.querySelector('.popup__input-job');
let profileName = document.querySelector('.profile-info__title');
let profileJob = document.querySelector('.profile-info__subtitle');

function openPopup() {// open popup
  popup.classList.add('popup_opened');
  nameInput.value =  profileName.textContent;
  jobInput.value =  profileJob.textContent;
};

function closePopup() {
  popup.classList.remove('popup_opened');
};

function formSubmitHandler(e) {
  e.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
}

profileChanges.addEventListener('click', openPopup);
buttonClose.addEventListener('click', closePopup);
form.addEventListener('submit', formSubmitHandler);