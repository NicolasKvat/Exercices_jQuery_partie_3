
$(function () {
  // on déclare les variable 'height', 'width' et 'color'
  var height = 10;
  var width = 20;
  var color = 'red';
  // on attribue le css de notre rectangle
  $('#rec').css({'width' : width + 'px',
                'height' : height + 'px',
                'background-color' : color});
  // on déclare l'évènement 'click' sur une fonction
  $('#butt1').click(function () {
    // on ajoute 10 unitées aux variables 'heigth' et 'width'
    height += 10;
    width += 20;
    // si la hauteur et la largeur du rectangle dépasse 100px, on les remets à 10px
    if (height > 100 && width > 100) {
        height = 10;
        width = 20;
    }
    // on incrémente les variables 'height' et 'width' à la hauteur et la largeur
    $('#rec').css({'height': height + 'px',
                  'width': width + 'px'});
  });
  // on déclare l'évènement 'click' sur une fonction qui permet de changer la couleur du rectangle
  $('#butt2').click(function () {
      $('#rec').css('background-color', 'green');
  });
  // on déclare l'évènement 'click' sur une fonction qui permet de remettre la couleur initiale du rectangle
  $('#butt3').click(function () {
      $('#rec').css('background-color', color);
  });
  $('#butt4').click(function () {
      $('#rec').fadeIn(500);
  });
  $('#butt5').click(function () {
      $('#rec').fadeOut(500);
  });
});
