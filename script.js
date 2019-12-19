// if($ === jQuery) {
// alert("jQuery est actif")
// }

var compteur = 1; // on declare un compteur qui commence a 1

$('.diaporama img').hide(); // cache toutes les photos "img"
$('#1').show(); // on afiche #1 au chargement de la photo

function suivant() // fonction bouton "suivant"
{
  compteur++;
  if (compteur < 5) {
    $('.diaporama img').hide(); // cache toutes photos les "img"
    $('#' + compteur).show(); // prend les 'id' + 'passe au suivant'.montre la photo
  }
  else {
    alert('fin suivant')
  }
}

function precedent() // fonction bouton "precedent"
{
  compteur--;
  if (compteur > 0) {
    $('.diaporama img').hide(); // cache toutes photos les "img"
    $('#' + compteur).show(); // prend les 'id' + 'passe au suivant'.montre la photo
  }
  else {
    alert('fin precedent')
  }
}



$('.right').click(function() {
  suivant(); // fais appel à la fonction
});

$('.left').click(function() {
  precedent(); // fais appel à la fonction
});
