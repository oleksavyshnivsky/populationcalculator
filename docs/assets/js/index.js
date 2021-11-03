// ————————————————————————————————————————————————————————————————————————————————
// 
// ————————————————————————————————————————————————————————————————————————————————
function calc() {
	var population = parseInt(document.querySelector('#editor-population').value)
	var infection2death = parseFloat(document.querySelector('#editor-infection2death-perc').value)
	var vaccination2death = parseFloat(document.querySelector('#editor-vaccination2death-perc').value)

	var fullvacdeaths = Math.round(population * vaccination2death / 100)
	var fullnonvacdeaths = Math.round(population * infection2death / 100)

	document.querySelector('#editor-fullvacdeaths').value = fullvacdeaths.toLocaleString()
	document.querySelector('#editor-fullnonvacdeaths').value = fullnonvacdeaths.toLocaleString()
}

// ————————————————————————————————————————————————————————————————————————————————
// 
// ————————————————————————————————————————————————————————————————————————————————
function defaults() {
	document.querySelector('#editor-population').value = 41342000
	document.querySelector('#editor-infection2death-perc').value = 2.3
	document.querySelector('#editor-vaccination2death-perc').value = 0.0015
	calc()
}

// ————————————————————————————————————————————————————————————————————————————————
// 
// ————————————————————————————————————————————————————————————————————————————————
defaults()
document.querySelector('#btn-defaults').onclick = defaults

// ————————————————————————————————————————————————————————————————————————————————
// 
// ————————————————————————————————————————————————————————————————————————————————
document.querySelectorAll('#form-calc input').forEach(el => el.onchange = calc)
document.querySelector('#form-calc').onsubmit = e => {
	e.preventDefault()
	calc()
}
