(() => {
  const dataFormOrder = document.querySelector('[data-form-order]');
  const fields = dataFormOrder.querySelectorAll('input');
  const formOrder = {
    dataErrorName: dataFormOrder.querySelector('[data-error-name]'),
    dataErrorTel: dataFormOrder.querySelector('[data-error-tel]'),
    dataErrorEmail: dataFormOrder.querySelector('[data-error-email]'),
    dataErrorMessage: dataFormOrder.querySelector('[data-error-message]'),
    dataFormSubmit: dataFormOrder.querySelector('[data-form-submit]'),
  };
  const tooltip = document.getElementById('tooltip');

  dataFormOrder.addEventListener('submit', formSubmit);

  fields.forEach(field => {
    field.addEventListener('input', validateField);
  });

  function formSubmit(e) {
    e.preventDefault();
    console.log('submit');

    let allFieldsEmpty = true;

    fields.forEach(field => {
      const errorMessage = field.nextElementSibling;

      if (errorMessage && errorMessage.classList.contains('error-message')) {
        const errorText = errorMessage.querySelector('.error-text');

        if (!field.value) {
          errorMessage.classList.add('error-open');
          errorText.textContent = 'This field is required.';
          allFieldsEmpty = false;
        } else {
          validateField({ target: field });
          allFieldsEmpty = true;
        }
      }
    });

    if (!allFieldsEmpty) {
      tooltip.classList.add('tooltip-visible');
    } else {
      tooltip.classList.remove('tooltip-visible');
    }
  }

  function validateField(e) {
    const field = e.target;
    const errorMessage = field.nextElementSibling;

    if (errorMessage && errorMessage.classList.contains('error-message')) {
      const errorText = errorMessage.querySelector('.error-text');

      if (!field.value) {
        errorMessage.classList.add('error-open');
        errorText.textContent = 'This field is required.';
      } else {
        errorMessage.classList.remove('error-open');
        errorText.textContent = '';

        if (
          field === formOrder.dataErrorName &&
          (field.value.length < 3 || field.value.length > 25)
        ) {
          errorMessage.classList.add('error-open');
          errorText.textContent =
            'The name must be between 3 and 25 characters.';
        }

        if (field === formOrder.dataErrorEmail && !validateEmail(field.value)) {
          errorMessage.classList.add('error-open');
          errorText.textContent = 'Please enter a valid email address.';
        }

        if (field === formOrder.dataErrorTel && !validateTel(field.value)) {
          errorMessage.classList.add('error-open');
          errorText.textContent =
            'Please enter a valid phone number in format +38(0__) ___ __ __.';
        }
      }
    }
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validateTel(tel) {
    const re = /^\+38\(0\d{2}\) \d{3} \d{2} \d{2}$/;
    return re.test(tel);
  }
})();
