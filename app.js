const searchContryInput = document.querySelector('#searchContryInput');
const countryController = new CountryController();

searchContryInput.addEventListener('keyup', countryController.init.bind(countryController));