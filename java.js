document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const prenom = document.getElementById('prenom').value.trim();
            const nom = document.getElementById('nom').value.trim();
            const sujet = document.getElementById('sujet').value.trim();
            const message = document.getElementById('message').value.trim();

            if (prenom && nom && sujet && message) {
                alert('Merci ! Votre message a été envoyé.');
                form.reset();
            } else {
                alert('Veuillez remplir tous les champs du formulaire.');
            }
        });
    }
});

 // proramme qui génère et affiche un motif triangulaire en utilisant des étoiles

let hauteur = parseInt(prompt("Veuillez entrer la hauteur du triangle :"));

for (let i = 1; i <= hauteur; i++) {
  let ligne = "";
  for (let j = 1; j <= i; j++) {
    ligne += "*";
  }
  alert(ligne);
}


// Programme pour deviner un nombre entre 1 et 100 avec Do-while

let nombreSecret = Math.floor(Math.random() * 100) + 1;
let supposition;

do {
  supposition = parseInt(prompt("Devinez le nombre secret (entre 1 et 100) :"));
  if (supposition > nombreSecret) {
    alert("Le nombre secret est plus petit.");
  } else if (supposition < nombreSecret) {
    alert("Le nombre secret est plus grand.");
  }
} while (supposition !== nombreSecret);

alert("Félicitations, vous avez trouvé le nombre !"); 







// Programme qui prend en entré le mois actuel

let mois = parseInt(prompt("Veuillez entrer le numéro du mois (1-12) :"));

switch (mois) {
  case 1:
    alert("Janvier");
    break;
  case 2:
    alert("Février");
    break;
  case 3:
    alert("Mars");
    break;
  case 4:
    alert("Avril");
    break;
  case 5:
    alert("Mai");
    break;
  case 6:
    alert("Juin");
    break;
  case 7:
    alert("Juillet");
    break;
  case 8:
    alert("Août");
    break;
  case 9:
    alert("Septembre");
    break;
  case 10:
    alert("Octobre");
    break;
  case 11:
    alert("Novembre");
    break;
  case 12:
    alert("Décembre");
    break;
  default:
    alert("Numéro de mois invalide.");
}
