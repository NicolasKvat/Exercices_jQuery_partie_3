//Je récupère dans les variables ci-dessous les limites du cadre de jeu
var minX=$('#playRoom').offset().left;
var maxX=$('#playRoom').width()-minX;
//si on redimenssionne la page, on met à jour les limites
$(window).resize(function(){
    minX=$('#playRoom').offset().left;
    maxX=$('#playRoom').width()-minX;
});
//j'initialise la variable de position x du carré au milieu du cadre de jeu
var squareX = minX+maxX/2-40;
// on attend que la page soit chargée
$(document).ready(function(){
    //au demarrage je positionne le carré au centre (-10 car le carré fait 20px)
    $('#square').css('margin-left', squareX );
    //lorsque je suis sur le champ de texte
    $('#controlArea').focus(function(){
        //si j'appuie sur une touche
        $('#controlArea').keydown(function(){
            //si la touche est la touche droite ('39')
            if (event.keyCode == 39 ){
                //on incrémente la valeur de squareX
                //et on verifie si on depasse la largeur de la page
                squareX+=10;
                if (squareX > maxX-80){
                    squareX=minX;
                }
            }
            //si la touche est la touche gauche ('39')
            if (event.keyCode==37 ){
                //on décrémente la valeur de squareX
                //et on vérifie si on depasse la limite gauche de la page
                squareX-=10;
                if (squareX < minX){
                    squareX=maxX-80;
                }
            }
            // on met à jour la position du carré
            $('#square').css('margin-left', squareX);
        });
    });
});
