// Fonctionnalité 1
document.querySelector('footer').addEventListener('click', function() {
  console.log('clique');
});

// Fonctionnalité 1-bis
let clickCount = 0;
document.querySelector('footer').addEventListener('click', function() {
  clickCount++;
  console.log(`clic numéro ${clickCount}`);
});

// Fonctionnalité 2
let navbarToggler = document.querySelector('.navbar-toggler');
navbarToggler.addEventListener('click', function() {
  let navbarHeader = document.getElementById('navbarHeader');
  navbarHeader.classList.toggle('collapse');
});

// Fonctionnalité 3
let firstCard = document.querySelectorAll('.card')[0];
let firstCardEditButton = firstCard.querySelector('.btn-outline-secondary');

firstCardEditButton.addEventListener('click', function() {
  firstCard.querySelector('.card-text').style.color = 'red';
});

// Fonctionnalité 4
let secondCard = document.querySelectorAll('.card')[1];
let secondCardEditButton = secondCard.querySelector('.btn-outline-secondary');

secondCardEditButton.addEventListener('click', function() {
  if (secondCard.querySelector('.card-text').style.color === 'green') {
    secondCard.querySelector('.card-text').style.color = '';
  } else {
    secondCard.querySelector('.card-text').style.color = 'green';
  }
});

// Fonctionnalité 5
let navbar = document.querySelector('.navbar');
let bootstrapLink = document.querySelector('link[href*="bootstrap"]');
let restoreButton = document.getElementById('restore-bootstrap');

navbar.addEventListener('dblclick', function() {
  bootstrapLink.classList.toggle('disabled-bootstrap');
  bootstrapLink.disabled = bootstrapLink.classList.contains('disabled-bootstrap');

  // Afficher ou masquer le bouton de restauration
  if (bootstrapLink.disabled) {
    restoreButton.style.display = 'block';
  } else {
    restoreButton.style.display = 'none';
  }
});

restoreButton.addEventListener('click', function() {
  bootstrapLink.classList.remove('disabled-bootstrap');
  bootstrapLink.disabled = false;
  restoreButton.style.display = 'none';
});


// Fonctionnalité 6
let cards = document.querySelectorAll('.card');
cards.forEach(card => {
  let viewButton = card.querySelector('.btn-success');
  let cardImage = card.querySelector('.card-img-top');
  let cardText = card.querySelector('.card-text');
  
  viewButton.addEventListener('mouseover', function() {
    cardImage.style.width = '20%';
    cardText.style.display = 'none';
  });
  
  viewButton.addEventListener('mouseout', function() {
    cardImage.style.width = '100%';
    cardText.style.display = 'block';
  });
});

// Fonctionnalité 7
let btnSecondary = document.querySelector('.btn-secondary');
btnSecondary.addEventListener('click', function() {
  let cardsContainer = document.querySelector('.album .container .row');
  let lastCard = cardsContainer.querySelector('.card:last-child');
  cardsContainer.insertBefore(lastCard, cardsContainer.firstChild);
});

// Fonctionnalité 8
let btnPrimary = document.querySelector('.btn-primary');
btnPrimary.addEventListener('click', function(event) {
  event.preventDefault();
  let cardsContainer = document.querySelector('.album .container .row');
  let firstCard = cardsContainer.querySelector('.card:first-child');
  cardsContainer.appendChild(firstCard);
});

// Fonctionnalité 9
// Sélectionne le logo et le body
let logo = document.querySelector('.navbar-brand');
let body = document.body;

// Ajoute un attribut tabindex au logo pour le rendre focusable
logo.setAttribute('tabindex', '0');

// Ajoute un écouteur d'événement pour les clics sur le logo
logo.addEventListener('click', function() {
  console.log('Logo cliqué');
});

// Ajoute un écouteur d'événement pour les touches pressées
document.addEventListener('keydown', function(event) {
  console.log('Touche pressée:', event.key);
  
  // Retire toutes les classes ajoutées précédemment
  body.classList.remove('col-4', 'offset-md-0', 'offset-md-4', 'offset-md-8');
  console.log('Classes retirées:', body.classList);

  // Vérifie quelle touche a été pressée et ajuste les classes de <body> en conséquence
  switch (event.key) {
    case 'a':
      body.classList.add('col-4', 'offset-md-0');
      break;
    case 'y':
      body.classList.add('col-4', 'offset-md-4');
      break;
    case 'p':
      body.classList.add('col-4', 'offset-md-8');
      break;
    case 'b':
      // Aucune classe spéciale, retour à la normale
      break;
    default:
      // Si une autre touche est pressée, ne rien faire
      break;
  }

  console.log('Classes ajoutées:', body.classList);
});
