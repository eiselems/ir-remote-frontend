$(document).ready(function(){
    $("#pause").click(function(){
        alert("click");
        $.post( "api/buttons/pause", function( data ) {
            console.log("succesful: pause");
        });
    });
})