/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ './src/js/modals.js':
      /*!**************************!*\
  !*** ./src/js/modals.js ***!
  \**************************/
      /***/ () => {
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

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter = module && module.__esModule ? /******/ () => module['default'] : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  (() => {
    'use strict';
    /*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./modals */ './src/js/modals.js'
    );
    /* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
      _modals__WEBPACK_IMPORTED_MODULE_0__
    );
  })();

  /******/
})();
//# sourceMappingURL=main.js.map
