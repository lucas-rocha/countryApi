class CountryController {
	constructor() {
		this.ui = new UI('#app');
	}

	async findCountryByName(inputValue) {
		const searchCountry = await fetchCountries(inputValue);
		this.ui.render(searchCountry);
	}

	init(event) {
		const inputValue = event.target.value;
		if(inputValue === '') this.ui.clear();
		return this.findCountryByName(inputValue);
	}
}