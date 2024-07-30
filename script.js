/*let prenom = prompt("Quel est ton prénom?")
let welcomeTitle = document.getElementById("welcomeTitle")
welcomeTitle.innerText = "Préparez la carte bancaire "+ prenom + "! :)"*/

let isOk = prompt("ça va ou pas? Répondre par oui ou non");

if ((isOk == "oui") || (isOk == "OUI") || (isOk == "Oui") || (isOk == "Yes"))
{
	//faire un truc
    console.log("l'utilisateur va bien :)")
}
else if ((isOk == "non") || (isOk == "NON") || (isOk == "Non") || (isOk == "No"))
{
	//fiare autre chose
	console.log("l'utilisateur va mal :)")
}
else
	//faire un truc dans le cas ou l'utilisateur fait ce qu'il veut
	console.log("l'utilisateur ne respecte pas la question ;-;")

