var REGISTER = 'http://www.monsite.com/inscription';
var REQUEST = location.href;
function message(type,message,timeval,redirect) {
    if(type == 1) {
        var myclass = 'alert alert-success';
        var title = 'OK';
    }
    else {
        var myclass = 'alert-danger alert-error';
        var title = 'ERREUR';
    }
    bootbox.alert('<div class="'+myclass+'" style="padding:10px;"><h2>'+title+'</h2><p>'+message+'</p></div>');
    setTimeout(function() {
        bootbox.hideAll();
        if(redirect) {
            if(redirect=='back')
                history.back();
            else
                location.href = redirect;
        }
    }, timeval*1000);
}
$(document).ready(function() {
    if(document.getElementById("checker") == undefined && !REQUEST.match('inscription')) {
        message(0,"<u>Il semblerait que <b>ADBLOCK</b> soit activé sur votre navigateur</u>. Vous ne voulez plus de pub ? <a href='"+REGISTER+"'>Inscrivez-vous !</a>. Vous allez être redirigé vers la page d\'inscription dans 10 secondes... ",10,REGISTER);
    }
});
