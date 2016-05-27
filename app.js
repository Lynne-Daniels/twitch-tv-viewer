var streams = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff", "brunofin", "comster404"];

for (var i = 0; i < streams.length; i++){
	(function(i) { // protects i in an immediately called function  thanks http://stackoverflow.com/questions/15347750/getjson-and-for-loop-issue
	var twitchResults = [];
	$.getJSON('https://api.twitch.tv/kraken/streams/OgamingSC2?callback=?', function(data) {
		twitchResults[i] = data;
		console.log('i is '+ i +', '+ data);
		console.log(twitchResults[i]);

	});//end getJson and its callback
	    })(i);
};//end for loop

function makeRow(data){
	//$()TODO function to append rows to results div
	
}

			<div class = "row"><div class = "col-xs-1 avatar"><img src = "https://placekitten.com/40/40"></div>
				<div class = "col-xs-3 screenname">title of stream</div>
				<div class = "col-xs-8 description">will put the description here, but it mustn't be too many characters, needs to fit on a mobile phone in 1, maybe two lines</div>
			</div>