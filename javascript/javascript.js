{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript"> */}
  var baseUrl = "https://api.punkapi.com/v2/beers"
  
  
  function beerInfo(response){

   console.log(response);
   var results = response[0];
    console.log(results)
    
    var beerDiv = $("<div>")
    var imageUrl = results.image_url;
    var image = $("<img>").attr("src", imageUrl);

    
   
    var name = results.name;
    var date = results.first_brewed;
    var description = results.description;
    var food = results.food_pairing;
    
    // beerSearch.attr(image, name, date, description, food)
    beerDiv.append(image, name, date, description, food)
    // beerDiv.append(beerSearch);

    
    console.log(results.name);
    console.log(results.first_brewed)
    console.log(results.description);
    console.log(results.food_pairing)


    $("#stuff").html(beerDiv);
   }
 
 $("#search").on("click", function(event){
   event.preventDefault();

   var  beerSearch = $("#search-input").val();
   
  
  var url = baseUrl + "?beer_name=" + beerSearch;
  

  $.ajax({
    url: url,
    method: "GET"
  }).then(function(response){

    beerInfo(response);
  }); 
  
})



$("#random").on("click", function(event){
   event.preventDefault();

  
randomUrl = "https://api.punkapi.com/v2/beers/random";
  $.ajax({
    url: randomUrl,
    method: "GET"
  }).then(function(response){
    beerInfo(response);
  });     
})