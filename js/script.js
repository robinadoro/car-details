const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'cars-specs-automotive-catalog.p.rapidapi.com',
		'X-RapidAPI-Key': '179a10760amsh8c338772f3015c6p120a06jsnf88340cc64c5'
	}
};

// fetch('https://cars-specs-automotive-catalog.p.rapidapi.com/api/cars/full-specs/Honda', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

let carBrands;
async function loadCarBrands() {
	const response = await fetch("car_brands.json");
	carBrands = await response.json();
}

(async () => {
	await loadCarBrands();
})()


function autocompleteMatch(input) {
	if (input == '') {
		return [];
	}
	var reg = new RegExp(input.toLowerCase());
	return (carBrands['data']).filter((term) => {
		if (term.toLowerCase().match(reg)) {
			return term;
		}
	});
}

function showResults(val) {
	res = document.getElementById("result");
	res.innerHTML = '';
	let list = '';
	let terms = autocompleteMatch(val);
	for (i = 0; i < terms.length; i++) {
		list += '<li>' + terms[i] + '</li>';
	}
	res.innerHTML = '<ul style="list-style:none; color:#fff; cursor:pointer;" class="results">' + list + '</ul>';
	const selection = document.querySelectorAll(".results");
	selection.forEach(element => {
		element.addEventListener('click', pickSelection)
	})

	function pickSelection(event) {
		console.log('Each brand '+ event.target.textContent)
	}
}

let search_input = document.getElementById("search_car");
search_input.addEventListener("keyup", () => {
	let search = search_input.value;
	showResults(search);
});

function download(filename, text) {
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}

// fetch('https://cars-specs-automotive-catalog.p.rapidapi.com/api/cars/brands', options)
// 	.then(response => response.json())
// 	.then((response) => {
// 		console.log(response.data);
// 		download("car_brands.json", JSON.stringify(response));
// 	})
// 	.catch(err => console.error(err));