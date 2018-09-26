$(document).ready(function() {

    $("button").on("click", function() {
    
      var word = $("#recipes").val();
      console.log(word ,"esta es la palabra");
  
    // var queryURL = "https://www.food2fork.com/api/get?key=1da509da23ed2e8894b619e4e4dc25bb&rId=35382";
    //var queryURL = "https://www.food2fork.com/api/search?key=1da509da23ed2e8894b619e4e4dc25bb&q="+ word +"&page=2";
    var queryURL = "https://developers.zomato.com/api/v2.1/locations?query=San%20diego"
    
    $.ajax({  
        url: "https://developers.zomato.com/api/v2.1/locations?query=San%20diego",
        dataType: 'json',
        async: true,
        beforeSend: function(xhr){xhr.setRequestHeader('user-key', 
        '4293f75ed134cc3dc7f4f497a4a7a0ae');},  // This inserts the api key into the HTTP header
        success: function(response) { console.log(response) } });

    //     headers:{
    //     'user_key': '4293f75ed134cc3dc7f4f497a4a7a0ae',
    //     },
    //   url: queryURL,
    //   method: "GET",
    //   dataType:"json",
    //   //data: word,
    //   success: function(response) {
    //     console.log(response);
    //     // Saving the image_original_url property
    //     // var result = response.recipes;
    //     // var recipeDiv = $("<div>");
    //     // recipeDiv.attr("data", result);
    //     // $("#search").html(`<p>${JSON.stringify(result)}</p>`);
         
      

    
  })
  })
  