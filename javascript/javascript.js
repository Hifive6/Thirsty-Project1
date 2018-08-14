  
     $("#search").on("click", function(event){
        event.preventDefault();
 
        var beerSearch = $("#search-input").val();
 
 
       $.ajax({
         url: "https://api.punkapi.com/v2/beers/random",
         method: "GET"
       }).then(function(response) {
         console.log(response);
         
         var beerDiv = $("<div class='parallax1'>")
         var imageUrl = response[0].image_url;
         var image = $("<img>").attr("src", imageUrl);
 
         
 
         var name = response[0].name;
         var date = response[0].first_brewed;
         var description = response[0].description;
         var food = response[0].food_pairing;
         
         
         beerDiv.append(image, name, date, description, food)
         
 
         
         console.log(response[0].name);
         console.log(response[0].first_brewed)
         console.log(response[0].description);
         console.log(response[0].food_pairing)
 
 
         $("#stuff").html(beerDiv);
       //clickBtn();
       });
     })
     //$(document).on("click", "#search");