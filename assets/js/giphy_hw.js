
var bands = ['Megadeth', 'Metallica', 'Ozzy Osbourne', 'Black Label Society', 'Slayer'];

  console.log(bands);


  function metalOutput() {
    var metal = $(this).attr('divTitle');
    var gifyUrl = "http://api.giphy.com/v1/gifs/search?&api_key=dc6zaTOxFJmzC&q="+metal+"&limit=10&fmt&rating=pg-13";

    // "http://api.giphy.com/v1/gifs/search?q="+metal+"&api_key=dc6zaTOxFJmzC";

    $.ajax({url: gifyUrl, method:'GET'})

    .done(function(response) {
      console.log(response);

      var gifs = response.data;

      var container= $('.images');
        container.empty();
     
      $.each(gifs, function(key, value){

        var newDiv = $('<div>');



        gif=value;
     
        original_url=gif.images.fixed_height_still.url;
        originalAnimated_url1=gif.images.fixed_height.url;
        original_url1=gif.rating;
        
        newImage=$('<img>');
        // newRate=$('<div/>');
        
        newImage.attr('src', original_url);
        newImage.attr('data-still', original_url);
        newImage.attr('data-animated', originalAnimated_url1);
        newImage.attr('data-state', 'still');
        newImage.addClass('gif');
        // newRate.attr('txt', original_url1);
        newImage.attr('rating', original_url1);
        newRating=$('<p>');
        newRating.text('Rating: ' + original_url1);
        // container.append($('<br>'),'Rating: ' + original_url1, $('<br>'), newImage);
        
        newDiv.append(newRating);
        newDiv.append(newImage);
        newDiv.attr('style', 'display:inline-block')
        container.append(newDiv);

//cmd option f;

        // container.appendTo()
        // $('.images').append(newImage.rating);
        // container.prepend(newRate);
        // container.append("Rating: " + JSON.stringify(newRate));
      });

      

     

    });

}



  function divMaker(){

    $('#metalCollect').empty();

    for (var i=0; i<bands.length; i++){
      
      var newMetalDiv = $('<div/>').appendTo('#metalCollect');

      newMetalDiv.addClass('band');
      newMetalDiv.attr('divTitle', bands[i]);
      newMetalDiv.text(bands[i]);
      $('#metalCollect').append(newMetalDiv);
    
    }
}

$('#extraMetal').on('click', function(event){

  // event.preventDefault();
  var metalInput = $('#metal-inject').val().trim();
// if('#metal-inject').val().trim().contains('.bands'){
  if(($.inArray(metalInput, bands) >= 0) || metalInput === ""){
    console.log('invalid input');
  // return false;
  }else{
    console.log('new stuff yo')
    bands.push(metalInput);
    divMaker();
    $('#metal-inject').val('');  
  }

  return false;

// if('#metalCollect'.contains(val()){
//   return false;
// }


  // );     

});

// function clear() {
//   $('#metalCollect').empty();
// };

// $('.band').on('click', '#metalCollect', empty());

$(document).on('click', '.band', metalOutput);

divMaker();

// $('#jsonStuff').on('click', empty());

$(document).on('click', ".gif", function(){
  if($(this).attr('data-state')==='still') {
    $(this).attr('data-state', 'animated');
    $(this).attr('src', $(this).attr('data-animated'));
  }else{
    $(this).attr('src', $(this).attr('data-still'));
    $(this).attr('data-state', 'still');
  }


  


  
});



// metalOutput();
