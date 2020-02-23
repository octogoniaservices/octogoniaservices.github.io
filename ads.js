$(document).ready(function(){
    if($("#wrapfabtest").height() > 1) {
        alert('Une bloqueur de pub a été détecté. Vous serez rediriger sur google.');
        $(location).attr('href',"https://google.fr");
    }
});
