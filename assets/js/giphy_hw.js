
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
        original_url=gif.images.original.url;
        newImage=$('<img>');
        newImage.attr('src', original_url);
        container.append(newImage);
      });

      // $('#jsonStuff').html(JSON.stringify(response));

    });

    $.ajax({url: gifyUrl, method:'GET'})

    .done(function(response) {
      console.log(response);

      var ratings = response.data[1].rating;
      console.log("Rating: " + ratings);
      $.each(ratings, function(key, value){
        var container1= $('#rating');
        rate=value;
        original_url1=rate.images.original.rating;
        newRate=$('<div>');
        newRate.attr('src', original_url1);
        container1.append(newRate);
      });

      // $('#jsonStuff').html(JSON.stringify(response));

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
