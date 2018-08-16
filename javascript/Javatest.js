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
    console.log(database);

$("#search").on("click", function(event){
    event.preventDefault();
    
    beerSearch = $("#search-input").val();

    
    
    
    console.log(beerSearch);
    
    database.ref().set({
       search: beerSearch,  
     });
   });

//    database.ref().on("child")




//   function beerInfo(response){

//     //console.log(response);
//     var results = response[0];
//      //console.log(results)
     
//      var beerDiv = $("<div>")
//      var imageUrl = results.image_url;
//      var image = $("<img>").attr("src", imageUrl);

     
    
//      var name = results.name;
//      var date = results.first_brewed;
//      var description = results.description;
//      var food = results.food_pairing;
     
     

      

//     beerDiv.append(image, name, date, description, food)
//     $("#stuff").html(beerDiv);
//     }
    
//     beerSearch.attr(image, name, date, description, food)
     




        
  
//   var url = baseUrl + "?beer_name=" + beerSearch;
   

//    $.ajax({
//      url: url,
//      method: "GET"
//    }).then(function(response){
//      console.log(response)

//      //results.length < 1 or == 0
//      if(response.length < 1 )//this is not right will need to change soon =)) 
//      { 
//        console.log("world");
//        $("#search-input").val( " " );
//         //dalert("beer not found");
//         //break;
//      }
//      else{
//        console.log("hi")
     
//      //figure this if else site
//      }   
// //beerInfo(response);
//      // 
     
//    }); 
   
 