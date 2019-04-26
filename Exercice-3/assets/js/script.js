$(document).ready(function () {
  //on déclare une variable 'aDeviner' qui va créer un nombre entre 0 et 100
  var aDeviner = Math.floor(Math.random() * 101);
  //on déclare 'essais' pour indiquer le nombre d'essais
  var essais = 0;
  //on déclare une var avec l'id '#valid', on lui attribut une fonction avec l'event 'click'
  $('#valid').click(function () {
    // on vérifie que la saisie correspond bien à un nombre
    if (!isNaN($('#number').val())) {
     // à chaque essais, on incrémente la variable 'essais'
      essais++;
      // si la saisie correspond à un nombre et est inférieur à la variable à 'aDeviner'
      if ($('#number').val() < aDeviner) {
        // on affiche une alert
        alert('Trop petit');
      }
      // si la saisie correspond à un nombre et est supérieur à la variable à 'aDeviner'
      if ($('#number').val() > aDeviner) {
      // on affiche une alert
        alert('Trop grand');
      }
      // si la saisie correspond à un nombre et est égale à la variable à 'aDeviner'
      if ($('#number').val() == aDeviner) {
        // on affiche une alert
        alert('Gagné' + '\n' + 'Vous avez fait ' + essais + ' essais');
      }
    } else {
      // sinon la saisie n'est pas un nombre, on affiche une alert
      alert('Veuillez entrer un nombre');
    }
  //   //on créer une boucle 'tant que' avec la condition (si la valeur de '#number' est différente de la var 'aDeviner' alors...)
  //   while ($('#number').val() != aDeviner) {
  //     //on ajoute un essai
  //     //on créer un 'if' avec la condition (si la valeur de '#number' est plus grande que la var 'aDeviner' alors...)
  //     if ($('#number').val() > aDeviner) {
  //       //on affiche une 'alert ('trop grand')'
  //       alert('trop grand !');
  //       break;
  //     } else {
  //       //on affiche une 'alert ('trop petit')'
  //       alert('trop petit !');
  //       break;
  //     }
  //   }
  //   //on créer un 'if' avec la condition (si la valeur de '#number' est égale à la var 'aDeviner' alors...)
  //   if ($('#number').val() == aDeviner) {
  //     // on affiche 'Bravo'
  //     alert('Bravo ! Vous avez fait ' + essais + ' essais.');
  //   }
  });
});
