$(function () {
  // on déclare une variable 'valeur' qu'on initialise à 0
  var valeur = 0;
  // on appelle une fonction '.click' avec l'id '#plus' rattaché au bouton
  $('#plus').click(function () {
    valeur++;
    // La méthode '.val()' permet de récupérer ou de modifier une valeur (récupère la valeur du nombre de clique)
    //  on passe l'incrémentation de 'valeur' à cette méthode en argument
    $('#text').val(valeur);
  });
  // on appelle une fonction '.click' avec l'id '#moins' rattaché au bouton
  $('#moins').click(function () {
    valeur--;
    // La méthode '.val()' permet de récupérer ou de modifier une valeur (récupère la valeur du nombre de clique)
    //  on passe l'incrémentation de 'valeur' à cette méthode en argument
    $('#text').val(valeur);
  });
});
