$(document).ready(function(){


$('.button').on('click', function(e){
  let buttonID = $(this).attr('id');
  $('.display').text(buttonID);
  let url = "api/buttons/" + buttonID;
  $.post( url, function( data ) {
            console.log("succesful: pause");
        });
  setTimeout(function(){
    $('.display').text('');
  },500);
});
})