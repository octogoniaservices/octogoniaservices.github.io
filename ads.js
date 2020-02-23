$(document).ready(function(){
    if($("#wrapfabtest").height() > 0) {
        console('caca')
        
    } else {
        alert('Une bloqueur de pub a été détecté. Vous serez rediriger sur une page qui vous montre comment désactiver adblock. Cliquez sur le bouton "Ok" pour continuer.');
        $(location).attr('href',"https://www.youtube.com/watch?v=h7l1CBnrepY");
    }
});
