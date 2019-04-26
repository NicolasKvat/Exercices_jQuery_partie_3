// $(function () {
//   $('#clickMe').click(function () {
//     var valeur = $('#text').val();
//     valeur++;
//     $('#text').val(valeur);
//     });
// });

$(function () {
  // on déclare une variable 'valeur' qu'on initialise à 0
  var valeur = 0;
  // on appelle une fonction '.click' avec l'id #clickMe rattaché au bouton
  $('#clickMe').click(function () {
    // La méthode '.val()' permet de récupérer ou de modifier une valeur (récupère la valeur du nombre de clique)
    //  on passe l'incrémentation de 'valeur' à cette méthode en argument
    $('#text').val(++valeur);
  });
});
