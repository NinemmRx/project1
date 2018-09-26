$(document).ready(function() {

  $("button").on("click", function() {
  
    var word = $("#recipes").val();
    console.log(word ,"esta es la palabra");

  // var queryURL = "https://www.food2fork.com/api/get?key=1da509da23ed2e8894b619e4e4dc25bb&rId=35382";
  var queryURL = "https://www.food2fork.com/api/search?key=1da509da23ed2e8894b619e4e4dc25bb&q="+ word +"&page=2";
  $.ajax({
    url: queryURL,
    method: "GET",
    dataType:"json",
    //data: word,
    success: function(response) {
      console.log(response);
      var result = response.recipes;
      console.log(result[0].f2f_url);
      //var image = $("<a>").attr("href", result[0].f2f_url);
      $("#search").attr("href", result[0].f2f_url);
      // Saving the image_original_url property
      
      //var recipeDiv = $("<div>");
    // recipeDiv.attr("data", result);
     // $("#search").html(response.recipes[0])
     //console.log(result[0].f2f_url)
     //var image = result[0].f2f_url;
      //$("<img>").attr("src",result[0].f2f_url.val) ;
     //console.log(image)
     //$("#search").html(`<p>${JSON.stringify(image)}</p>`);
       //recipeDiv.append(image)
    }
  })
  
})
})

