console.log("Modification n°1");
	function changeTitles(){
	 	title = document.querySelector("h1");
		title.textContent = "Ce que j'ai appris à THP"; 
		sous_titre = document.querySelector(".lead");
		sous_titre.textContent = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}
console.log("Modification n°2");

function changeCallToActions(){
	button = document.querySelector(".btn");
	button.textContent = "OK je veux tester !"
	button.setAttribute("href", "http://www.thehackingproject.org");
	button2 = document.querySelector("a.btn:nth-child(2)");
	button2.textContent = "Non Merci"
	button2.setAttribute("href", "https://www.pole-emploi.fr/accueil/");
}

console.log("Modification n°3")
function changeLogoName() {
	logo = document.querySelector(".navbar-brand > strong:nth-child(2)");
	logo.textContent = "The THP Experience"
}

console.log("Modification n°4")
	function populateImages() {
	let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
for (var i = 0; i < imagesArray.length; i++) {
		images = document.querySelectorAll("div.album.py-5.bg-light div.container div.row div.col-md-4 img");
		images[i].src = imagesArray[i];
		}
	}
console.log("Modification n°5")
	function deleteLastCards() {
		images = document.querySelectorAll("div.album.py-5.bg-light div.container div.row div.col-md-4 ");
		for (var i = 0; i < images.length; i++) {
		if (i >= (images.length - 3)) {
			images[i].remove();
		}

	}
}

console.log("Modification n°6")
function changeCardsText() {
		t = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web", "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML", "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."]
	for (var i = 0; i < t.length ; i++) {
		cards = document.querySelectorAll("div.album.py-5.bg-light div.container div.row div.col-md-4 p.card-text");
		if(i < 3){
			cards[i].textContent = t[i];
		}
	}

}

function changeViewButtons() {
		view = document.querySelectorAll("div.album.py-5.bg-light div.container div.row div.col-md-4  div.col-md-4:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > button:nth-child(1)");
for (var i = 0; i < view.length; i++) {

	}
}

	changeTitles();
	changeCallToActions();
	changeLogoName();
	populateImages();
	deleteLastCards();
	changeCardsText();
	changeViewButtons()
	



