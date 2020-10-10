class UI {
	constructor(element) {
		this.elemento = document.querySelector(element);
	}
	render(model) {
		const result = model.map(data => {
			return `
				<div class="col">
					<img src="${data.flag}" alt="${data.name}" class="img-thumbnail"/>
					<p><b>Name:</b> ${data.name}<p>
					<p><b>Region:</b> ${data.region}<p>
				</div>
			`;
		}).join('');
		this.elemento.innerHTML = result;
	}
	clear() {
		this.elemento.innerHTML = '';
	}
}