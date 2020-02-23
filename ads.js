$(document).ready(function(){
    if($("#wrapfabtest").height() > 0) {
        alert('No AdBlock :)');
        
    } else {
        alert('AdBlock Detected ');
        $(location).attr('href',"https://octogoniaservices.tk/minecraft");
    }
});
