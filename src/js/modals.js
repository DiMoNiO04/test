const modalOverlay = document.getElementById('modals-overlay');
const modalAuth = document.getElementById('modal-auth');
const btnAuthOpen = document.querySelector('.js-modal-auth-open');

let isInner = false;

const toggleActiveClass = (el) => el.classList.toggle('active');

function generateModalContent() {
  return `
    <button type="button" class="modal-auth__close js-modal-auth-close">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6 6L18 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
    <div class="modal-auth__title">Войти в систему</div>
    <form action="#" method="#" class="modal-auth__form">
      <div class="modal-auth__inputs">
        <div class="modal-auth__input">
          <input type="text" placeholder="Email/Телефон" name="text" class="input" />
        </div>
        <div class="modal-auth__input">
          <input type="password" placeholder="Пароль" name="password" class="input" />
        </div>
      </div>
      <div class="modal-auth__checkbox checkbox">
        <input type="checkbox" name="remember" id="remember" />
        <label for="remember">Запомнить пароль</label>
      </div>
      <a href="#" class="modal-auth__link"> Восстановить </a>
      <div class="modal-auth__btns">
        <button type="submit" class="modal-auth__btn btn btn-sec">
          <span>Войти</span>
        </button>
        <a href="#" class="modal-auth__btn btn btn-sec btn-sec--white">
          <span>Зарегистрироваться</span>
        </a>
      </div>
    </form>`;
}

function closeModal() {
  toggleActiveClass(modalOverlay);
  toggleActiveClass(modalAuth);
}

function openModal() {
  toggleActiveClass(modalOverlay);
  toggleActiveClass(modalAuth);

  if (!isInner) modalAuth.innerHTML = generateModalContent();

  isInner = true;

  const btnAuthClose = modalAuth.querySelector('.js-modal-auth-close');
  btnAuthClose.addEventListener('click', closeModal);
}

modalOverlay.addEventListener('click', (event) => {
  if (!event.target.closest('#modal-auth')) {
    closeModal();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  btnAuthOpen.addEventListener('click', openModal);
});
