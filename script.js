$(document).ready(function(){

	var twitchURL = "https://www.twitch.tv/";
	var apiLink = "https://gist.githubusercontent.com/QuincyLarson/2ff6892f948d0b7118a99264fd9c1ce8/raw/e9e12f154d71cf77fc32e94e990749a7383ca2d6/Twitch%2520sample%2520API%2520responses%2520in%2520array%2520form";

	var html = "";

		$.getJSON(apiLink, function(json) {
			console.log(json);

  		json.forEach(function(val) {

        if (val.stream === null) {
  		  html += "<div class='row'><div class='col-xs-4 glyphicon glyphicon-user'></div>";
        html += "<div class='col-xs-4'>" + val.display_name + "</div>";
      	html += "<div class='col-xs-4'><a href='" + twitchURL + val.display_name + "'> Offline </a></div></div>";
        // console.log(html);
  			} else if (val.error) {
        html += "<div class='row'><div class='col-xs-4 glyphicon glyphicon-user'></div>";
        html += "<div class='col-xs-4'>User does not exist</div>";
        html += "<div class='col-xs-4'>Not available</div></div>";
        // console.log(html);
        } else {
  			html += "<div class='row'><div class='col-xs-4 glyphicon glyphicon-user'></div>";
     // html += "<div class='row'><div class='col-xs-4><img src=" + val.stream.logo + "></div>";
        html += "<div class='col-xs-4'>" + val.stream.display_name + "</div>";
        html += "<div class='col-xs-4'><a href='" + twitchURL + val.stream.display_name + "'> Online </a></div></div>";
  			// console.log(html);
        }
  	});
    console.log(html);
    $("#output").html(html);
  });

});
