$(document).ready(function(){
    if($("#wrapfabtest").height() > 0) {
        alert('Aucun bloqueur de pub a été détecté.');

    } else {
        alert('Une bloqueur de pub a été détecté. Vous serez rediriger sur google.');
        $(location).attr('href',"https://google.fr");
    }
});
