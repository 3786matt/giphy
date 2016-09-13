
var bands = ['Megadeth', 'Metallica', 'Ozzy Osbourne', 'Black Label Society', 'Slayer'];

  console.log(bands);


  function metalOutput() {
    var metal = $(this).attr('divTitle');
    var gifyUrl = "https://api.giphy.com/v1/gifs/search?&api_key=dc6zaTOxFJmzC&q="+metal+"&limit=10&fmt&rating=r";


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
               
        newImage.attr('src', original_url);
        newImage.attr('data-still', original_url);
        newImage.attr('data-animated', originalAnimated_url1);
        newImage.attr('data-state', 'still');
        newImage.addClass('gif');        
        newImage.attr('rating', original_url1);
        newRating=$('<p>');
        newRating.text('Rating: ' + original_url1);
        newDiv.append(newRating);
        newDiv.append(newImage);
        newDiv.attr('style', 'display:inline-block')
        container.append(newDiv);
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

  var metalInput = $('#metal-inject').val().trim();

  if(($.inArray(metalInput, bands) >= 0) || metalInput === ""){
    console.log('invalid input');
  
  }else{
    console.log('new stuff yo')
    bands.push(metalInput);
    divMaker();
    $('#metal-inject').val('');  
  }
  return false;

});

$(document).on('click', '.band', metalOutput);

divMaker();

$(document).on('click', ".gif", function(){
  if($(this).attr('data-state')==='still') {
    $(this).attr('data-state', 'animated');
    $(this).attr('src', $(this).attr('data-animated'));
  }else{
    $(this).attr('src', $(this).attr('data-still'));
    $(this).attr('data-state', 'still');
  }

});



