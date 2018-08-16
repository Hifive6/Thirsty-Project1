







var config = {
    apiKey: "AIzaSyBiJq9sJSLN5FClhkkDqTo-fi9j4PxGykQ",
    authDomain: "thirsty-project1.firebaseapp.com",
    databaseURL: "https://thirsty-project1.firebaseio.com",
    projectId: "thirsty-project1",
    storageBucket: "thirsty-project1.appspot.com",
    messagingSenderId: "762189077339"
  };
  


  firebase.initializeApp(config);

  var database = firebase.database();
       
  database.ref().on("value",function(snapshot){
     pullFire = snapshot.val().search;
      console.log(pullFire)
      baseUrl = "https://api.punkapi.com/v2/beers"
    url = baseUrl + "?beer_name=" + pullFire
    
    $.ajax({
    url: url,
    method: "GET"
  }).then(function(response){
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
    
     

     
    $("pullFire").attr(image, name, date, description, food);
    beerDiv.append(image, name, date, description, food);
    beerDiv.append(pullFire);
      
      
    console.log(results.name);
    console.log(results.first_brewed)
    console.log(results.description);
    console.log(results.food_pairing)


  $("#more-stuff").html(beerDiv);
    //results.length < 1 or == 0
    // if(response.length < 1 )//this is not right will need to change soon =)) 
    // { 
    //   console.log("world");
    //   $("#search-input").val( " " );
    //    //dalert("beer not found");
    //    //break;
    // }
    // else{
    //   console.log("hi")
    
    // //figure this if else site
    // }   
//beerInfo(response);
    // 
  }); 
  }); 

  database.ref().on("value",function(snapshot){
    pullRandom = snapshot.val().random;

    var results = pullRandom[0];
    console.log(results)
      
    var beerDiv = $("<div>")
    var imageUrl = results.image_url;
    var image = $("<img>").attr("src", imageUrl);

      
     
    var name = results.name;
    var date = results.first_brewed;
    var description = results.description;
    var food = results.food_pairing;
    
     

     
    $("pullRandom").attr(image, name, date, description, food);
    beerDiv.append(image, name, date, description, food);
    beerDiv.append(pullRandom);
      
      
    console.log(results.name);
    console.log(results.first_brewed)
    console.log(results.description);
    console.log(results.food_pairing)


  $("#more-stuff").html(beerDiv);

  })





  
  