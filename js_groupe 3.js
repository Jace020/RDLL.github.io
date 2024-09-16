/*
 Je crée un script pour crée le menu burguer qui correspond à cela:
  SI burger.click
    AJOUTER la CLASSE clicked a body
    AJOUTER la CLASSE visible a navlinks-container
*/

const burger = document.querySelector('div.burger');
const body = document.querySelector('body');
const nav = document.querySelector('ul.navlinks-container')

burger.addEventListener('click', (e) => {
    e.preventDefault();
    body.classList.toggle('clicked');
    nav.classList.toggle('visible');
});

/*
 Je crée la fonction indisponnible:
  quand on clic sur un lien qui appel cette fonction, elle envoie une alerte.
*/

function indsiponible() { 
alert("Les PDF de madame Dena sont indisponibles.") 
}




4