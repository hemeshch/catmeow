let image = document.getElementById('image')
let fact = document.getElementById('fact')
let button = document.getElementById('button')

fetch('https://api.thecatapi.com/v1/images/search')
	.then(response => response.json())
	.then((data) => {
			image.src = data[0].url
			})

button.addEventListener('click', () => {
	fetch('https://api.thecatapi.com/v1/images/search')
		.then(response => response.json())
		.then((data) => {
				image.src = data[0].url
				})

	fetch('https://catfact.ninja/fact')
	.then(response => response.json())
	.then((factData) => {
		fact.innerText = factData.fact
		console.log(factData.text)
		})
})
