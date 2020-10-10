async function fetchCountries(countryName) {
	const response = await fetch(`https://restcountries.eu/rest/v2/name/${countryName}`);
	const data = await response.json();
	return data;
}