"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var counter = 2;
function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"

	var model=" "+carsJSON.Model, make=carsJSON.Make, year=" "+carsJSON.Year;
  		var template=
        "<div class='row'><div class='col-md-4 car'><h2>"+make+"</h2><p><strong>Model:</strong>"+model+"</p><p><strong>Year:</strong>"+year+"</p></div></div>";

		return template;
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then
  // add the resulting HTML to the div with an id of "cars"

	for(var i=0; i<carsJSON.length; i++) {
		var html = formatCars(carsJSON[i]);
  		$("#cars").append(html);
	}
}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  $.ajax({
    url: baseUrl+(counter+1)+"/6",
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data) {
      addCarsToDOM(data);
    }
  });



}
