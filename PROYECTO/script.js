/**
 * ============================================================================
 * PETMATCH PRELAUNCH LANDING PAGE - SCRIPT.JS
 * Vanilla JavaScript (ES6+)
 * Architecture: Functional, modular, strictly pure/named functions.
 * No external dependencies or unnecessary global variables.
 * ============================================================================
 */

(function () {
  'use strict';

  /**
   * Regular expression for email validation according to RFC 5322 specifications.
   */
  const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

  /**
   * DOM Elements Cache
   * Encapsulated to prevent polluting the global scope.
   */
  const elements = {
    header: document.querySelector('.header'),
    navToggle: document.querySelector('.nav__toggle'),
    mobileDrawer: document.querySelector('.mobile-drawer'),
    drawerOverlay: document.querySelector('.mobile-drawer__overlay'),
    drawerLinks: document.querySelectorAll('.mobile-drawer__link'),
    smoothScrollLinks: document.querySelectorAll('a[href^="#"]'),
    form: document.getElementById('lead-form'),
    nameInput: document.getElementById('lead-name'),
    emailInput: document.getElementById('lead-email'),
    roleSelect: document.getElementById('lead-role'),
    consentCheckbox: document.getElementById('lead-consent'),
    submitBtn: document.getElementById('lead-submit-btn'),
    successBanner: document.getElementById('lead-success-banner'),
  };

  /**
   * Pure validation functions
   */

  /**
   * Checks if a string has non-whitespace characters.
   * @param {string} value 
   * @returns {boolean}
   */
  function isNotEmpty(value) {
    return typeof value === 'string' && value.trim().length > 0;
  }

  /**
   * Tests if an email matches the standard pattern.
   * @param {string} email 
   * @returns {boolean}
   */
  function isValidEmail(email) {
    return isNotEmpty(email) && EMAIL_REGEX.test(email.trim());
  }

  /**
   * Validates that a select element has a valid, non-empty option chosen.
   * @param {string} value 
   * @returns {boolean}
   */
  function isValidSelection(value) {
    return isNotEmpty(value) && value !== '';
  }

  /**
   * Validates that a checkbox is checked.
   * @param {boolean} checked 
   * @returns {boolean}
   */
  function isConsentChecked(checked) {
    return Boolean(checked);
  }

  /**
   * DOM Manipulation: Visual state management for form fields (BEM)
   */

  /**
   * Sets the error state on a specific field and updates its error message.
   * @param {HTMLElement} inputElement 
   * @param {string} errorElementId 
   * @param {string} message 
   */
  function setFieldError(inputElement, errorElementId, message) {
    const errorMsgEl = document.getElementById(errorElementId);
    
    if (inputElement.type === 'checkbox') {
      inputElement.classList.add('form-lead__checkbox--error');
    } else if (inputElement.tagName.toLowerCase() === 'select') {
      inputElement.classList.add('form-lead__select--error');
      inputElement.classList.remove('form-lead__select--success');
    } else {
      inputElement.classList.add('form-lead__input--error');
      inputElement.classList.remove('form-lead__input--success');
    }

    inputElement.setAttribute('aria-invalid', 'true');

    if (errorMsgEl) {
      errorMsgEl.textContent = message;
      errorMsgEl.classList.add('form-lead__error-msg--visible');
    }
  }

  /**
   * Clears the error state on a specific field and optionally marks as valid.
   * @param {HTMLElement} inputElement 
   * @param {string} errorElementId 
   */
  function clearFieldError(inputElement, errorElementId) {
    const errorMsgEl = document.getElementById(errorElementId);

    if (inputElement.type === 'checkbox') {
      inputElement.classList.remove('form-lead__checkbox--error');
    } else if (inputElement.tagName.toLowerCase() === 'select') {
      inputElement.classList.remove('form-lead__select--error');
      inputElement.classList.add('form-lead__select--success');
    } else {
      inputElement.classList.remove('form-lead__input--error');
      inputElement.classList.add('form-lead__input--success');
    }

    inputElement.removeAttribute('aria-invalid');

    if (errorMsgEl) {
      errorMsgEl.textContent = '';
      errorMsgEl.classList.remove('form-lead__error-msg--visible');
    }
  }

  /**
   * Validates a single field by its identity and updates UI.
   * @param {string} fieldId 
   * @returns {boolean} True if field is valid
   */
  function validateField(fieldId) {
    switch (fieldId) {
      case 'lead-name': {
        const name = elements.nameInput.value;
        if (!isNotEmpty(name)) {
          setFieldError(elements.nameInput, 'error-name', 'Por favor ingresa tu nombre completo.');
          return false;
        }
        if (name.trim().length < 2) {
          setFieldError(elements.nameInput, 'error-name', 'El nombre debe tener al menos 2 caracteres.');
          return false;
        }
        clearFieldError(elements.nameInput, 'error-name');
        return true;
      }

      case 'lead-email': {
        const email = elements.emailInput.value;
        if (!isNotEmpty(email)) {
          setFieldError(elements.emailInput, 'error-email', 'El correo electrónico es obligatorio.');
          return false;
        }
        if (!isValidEmail(email)) {
          setFieldError(elements.emailInput, 'error-email', 'Ingresa un formato de correo válido (ej. tu@correo.com).');
          return false;
        }
        clearFieldError(elements.emailInput, 'error-email');
        return true;
      }

      case 'lead-role': {
        const role = elements.roleSelect.value;
        if (!isValidSelection(role)) {
          setFieldError(elements.roleSelect, 'error-role', 'Por favor selecciona tu perfil o interés.');
          return false;
        }
        clearFieldError(elements.roleSelect, 'error-role');
        return true;
      }

      case 'lead-consent': {
        const checked = elements.consentCheckbox.checked;
        if (!isConsentChecked(checked)) {
          setFieldError(elements.consentCheckbox, 'error-consent', 'Debes aceptar los términos y políticas para continuar.');
          return false;
        }
        clearFieldError(elements.consentCheckbox, 'error-consent');
        return true;
      }

      default:
        return true;
    }
  }

  /**
   * Validates the entire form and focuses the first invalid field.
   * @returns {boolean}
   */
  function validateForm() {
    const isNameValid = validateField('lead-name');
    const isEmailValid = validateField('lead-email');
    const isRoleValid = validateField('lead-role');
    const isConsentValid = validateField('lead-consent');

    if (!isNameValid) {
      elements.nameInput.focus();
      return false;
    }
    if (!isEmailValid) {
      elements.emailInput.focus();
      return false;
    }
    if (!isRoleValid) {
      elements.roleSelect.focus();
      return false;
    }
    if (!isConsentValid) {
      elements.consentCheckbox.focus();
      return false;
    }

    return true;
  }

  /**
   * Resets form input validation styling after submission.
   */
  function resetFormStyling() {
    [elements.nameInput, elements.emailInput, elements.roleSelect].forEach((input) => {
      input.classList.remove('form-lead__input--success', 'form-lead__input--error', 'form-lead__select--success', 'form-lead__select--error');
      input.removeAttribute('aria-invalid');
    });
  }

  /**
   * Handles Form Submission (Simulated, no fetch, no localStorage).
   * @param {Event} event 
   */
  function handleFormSubmit(event) {
    event.preventDefault();

    const isFormValid = validateForm();
    if (!isFormValid) {
      return;
    }

    // Capture values before reset
    const submittedName = elements.nameInput.value.trim();

    // Disable button to prevent multi-clicks
    const originalBtnText = elements.submitBtn.innerHTML;
    elements.submitBtn.disabled = true;
    elements.submitBtn.innerHTML = `
      <svg class="animate-spin" style="width: 18px; height: 18px; animation: spin 1s linear infinite;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
        <path d="M12 2a10 10 0 0 1 10 10"></path>
      </svg>
      <span>Procesando reserva...</span>
    `;

    // Simulated network delay (400ms) for high CRO feedback
    setTimeout(() => {
      // Show DOM Success Banner
      if (elements.successBanner) {
        elements.successBanner.innerHTML = `
          <svg class="form-lead__success-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <h3 class="form-lead__success-title">¡Bienvenido a la manada, ${submittedName}!</h3>
          <p class="form-lead__success-desc">
            Hemos reservado tu lugar con <strong>Acceso Prioritario VIP</strong>. Te hemos enviado un correo de bienvenida con tu Pase Fundador y el número de turno para el prelanzamiento.
          </p>
        `;
        elements.successBanner.classList.add('form-lead__success-banner--visible');
        elements.successBanner.setAttribute('tabindex', '-1');
        elements.successBanner.focus();
      }

      // Reset form fields
      elements.form.reset();
      resetFormStyling();

      // Re-enable button after 2.5 seconds
      setTimeout(() => {
        elements.submitBtn.disabled = false;
        elements.submitBtn.innerHTML = originalBtnText;
      }, 2500);
    }, 450);
  }

  /**
   * Real-time listeners for instant user feedback on blur and change
   */
  function setupRealTimeValidation() {
    if (elements.nameInput) {
      elements.nameInput.addEventListener('blur', () => validateField('lead-name'));
      elements.nameInput.addEventListener('input', () => {
        if (elements.nameInput.classList.contains('form-lead__input--error')) {
          validateField('lead-name');
        }
      });
    }

    if (elements.emailInput) {
      elements.emailInput.addEventListener('blur', () => validateField('lead-email'));
      elements.emailInput.addEventListener('input', () => {
        if (elements.emailInput.classList.contains('form-lead__input--error')) {
          validateField('lead-email');
        }
      });
    }

    if (elements.roleSelect) {
      elements.roleSelect.addEventListener('change', () => validateField('lead-role'));
      elements.roleSelect.addEventListener('blur', () => validateField('lead-role'));
    }

    if (elements.consentCheckbox) {
      elements.consentCheckbox.addEventListener('change', () => validateField('lead-consent'));
    }

    if (elements.form) {
      elements.form.addEventListener('submit', handleFormSubmit);
    }
  }

  /**
   * Navigation: Mobile Drawer & Accessibility
   */

  /**
   * Toggles the mobile menu open/closed and updates accessibility attributes.
   * @param {boolean} shouldOpen 
   */
  function setMobileMenuState(shouldOpen) {
    if (!elements.navToggle || !elements.mobileDrawer || !elements.drawerOverlay) return;

    elements.navToggle.setAttribute('aria-expanded', String(shouldOpen));
    
    if (shouldOpen) {
      elements.mobileDrawer.classList.add('mobile-drawer--open');
      elements.drawerOverlay.classList.add('mobile-drawer__overlay--visible');
      document.body.classList.add('menu-open');
      elements.navToggle.setAttribute('aria-label', 'Cerrar menú de navegación');
    } else {
      elements.mobileDrawer.classList.remove('mobile-drawer--open');
      elements.drawerOverlay.classList.remove('mobile-drawer__overlay--visible');
      document.body.classList.remove('menu-open');
      elements.navToggle.setAttribute('aria-label', 'Abrir menú de navegación');
    }
  }

  function setupMobileMenu() {
    if (!elements.navToggle) return;

    elements.navToggle.addEventListener('click', () => {
      const isExpanded = elements.navToggle.getAttribute('aria-expanded') === 'true';
      setMobileMenuState(!isExpanded);
    });

    if (elements.drawerOverlay) {
      elements.drawerOverlay.addEventListener('click', () => setMobileMenuState(false));
    }

    elements.drawerLinks.forEach((link) => {
      link.addEventListener('click', () => setMobileMenuState(false));
    });

    // Close menu when pressing Escape key (WCAG compliance)
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && elements.navToggle.getAttribute('aria-expanded') === 'true') {
        setMobileMenuState(false);
        elements.navToggle.focus();
      }
    });
  }

  /**
   * Native smooth scrolling for anchor links with focus management
   */
  function setupSmoothScroll() {
    elements.smoothScrollLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');
        if (targetId === '#' || !targetId.startsWith('#')) return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          event.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          // Accessibility: Move focus to target element without changing scroll
          targetElement.setAttribute('tabindex', '-1');
          targetElement.focus({ preventScroll: true });
        }
      });
    });
  }

  /**
   * Dynamic header styling on scroll
   */
  function setupHeaderScrollWatcher() {
    if (!elements.header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        elements.header.classList.add('header--scrolled');
      } else {
        elements.header.classList.remove('header--scrolled');
      }
    }, { passive: true });
  }

  /**
   * Main Initialization Function
   */
  function init() {
    setupRealTimeValidation();
    setupMobileMenu();
    setupSmoothScroll();
    setupHeaderScrollWatcher();
  }

  // Self-execute once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
