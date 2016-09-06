
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
     
      $.each(gifs, function(key, value){
        var container= $('.images');
       
        gif=value;
     
        original_url=gif.images.fixed_height_still.url;
        original_url1=gif.rating;
        
        newImage=$('<img>');
        // newRate=$('<div/>');
        
        newImage.attr('src', original_url);
        // newRate.attr('txt', original_url1);
        newImage.attr('rating', original_url1);
        
        container.append('Rating: ' + original_url1, newImage);
        // container.append(newImage);

        

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

$('#extraMetal').on('click', function(){

var metal = $('#metal-inject').val().trim();
bands.push(metal);
divMaker();
return false;

})

$(document).on('click', '.band', metalOutput);

divMaker();

// metalOutput();
