$(document).ready(function(){
    $("#pause").click(function(){
        $.post( "api/buttons/pause", function( data ) {
            console.log("succesful: pause");
        });
    });
})
