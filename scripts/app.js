$(document).on("ready", function(){
//alert('works!')
	var theUrl = 'https://api.giphy.com/v1/gifs/search?api_key=ctQC1QsA8G5rDqFb5eMFmHNHBePD9mt5&q=cats&limit=25&offset=0&rating=G&lang=en';
	var apiKey = 'ctQC1QsA8G5rDqFb5eMFmHNHBePD9mt5';

	$.ajax({

		// What kind of request
		method: "GET",

		// The URL for the request
		url: theUrl,

		// The data to send aka query parameters
		data: $("form").serialize(),

		// Code to run if the request succeeds;
		// the response is passed to the function
		success: onSuccess,

		// Code to run if the request fails; the raw request and
		// status codes are passed to the function
		error: onError
	});

	function onSuccess(json) {
		$("div").append("<h1>"+json.title+"</h1>");
	}

	function onError(xhr, status, errorThrown) {
		alert("Sorry, there was a problem!");
		console.log("Error: " + errorThrown);
		console.log("Status: " + status);
		console.dir(xhr);
	}
});