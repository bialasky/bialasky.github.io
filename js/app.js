$(document).foundation()
$('#pagedwn').bind("click", function () {
        $('html, body').animate({ scrollTop:3031 },"slow");
        return false;
});