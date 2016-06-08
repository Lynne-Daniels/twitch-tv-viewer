var streams = ["OgamingSC2","ESL_SC2","freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff", "brunofin", "comster404"];
var twitchRow = {
	image : '<img src = "https://placekitten.com/40/40">',
	title : 'Title goes here',
	description : 'description goes here',
	twitchLink : '"https://api.twitch.tv/kraken/channels/freecodecamp"'
};

//TODO do over like http://stackoverflow.com/questions/19818230/two-ajax-function-calls-best-practice


for (var i = 0; i < streams.length; i++){
	(function(i) { // protects i in an immediately called function  thanks http://stackoverflow.com/questions/15347750/getjson-and-for-loop-issue
	var twitchResults = [];
	$.getJSON('https://api.twitch.tv/kraken/streams/'+ streams[i] +'?callback=?', function(data) {
		twitchResults[i] = data;
		console.log('i is '+ i +', '+ data);
		console.log(twitchResults[i]);
		twitchRow.title = streams[i];
		
		if (data.stream === null){
			twitchRow.description = 'not broadcasting at this time';
		}else if (data.error){
			twitchRow.description = data.error + ' -- ' + data.message;
			}

		else{
			twitchRow.description = 'get-channel';//can i  delete this else?
		}
		$.getJSON('https://api.twitch.tv/kraken/channels/'+ streams[i] +'?callback=?', function(data) {
			//active gets channel.game and channel.status for the description
			if (twitchRow.description = 'get-channnel'){
				twitchRow.description = data.channel.game + ' ' + data.channel.status;	
			}// end if
			twitchRow.image = '<img src = "' + data.channel.logo +'">';
		}); //end inner getJSON and its callback  
		
	});//end outer getJson and its callback
	
	    })(i);// calls the anon function twice? does not work if deleted, wish I understood better
};//end for loop

function makeRow(data){
	//$()TODO function to append rows to results div
	$('#results').append('<div id="results"><div class = "row"><div class = "col-sm-1 col-xs-3 avatar"><img src = "'+
	twitchImage +'"></div><div class = "col-sm-3 col-xs-9 screenname">title of stream</div><div class = "col-sm-8 col-xs-12 description">will put the description here, but it mustnt be too many characters, needs to fit on a mobile phone in 1, maybe two lines</div></div>');
}
function makeOffAirRow(data){
		$('#results').append('<div id="results"><div class = "row"><div class = "col-sm-1 col-xs-3 avatar"><img src = "'+'"https://placekitten.com/40/40"'+'"></div><div class = "col-sm-3 col-xs-9 screenname">title of OFFAIRstream</div><div class = "col-sm-8 col-xs-12 description">will put the description here, but it mustnt be too many characters, needs to fit on a mobile phone in 1, maybe two lines</div></div>');
}
function makeErrorRow(data){
		$('#results').append('<div id="results"><div class = "row"><div class = "col-sm-1 col-xs-3 avatar"><img src = "'+'"https://placekitten.com/40/40"' +'"></div><div class = "col-sm-3 col-xs-9 screenname">' + data.error + '</div><div class = "col-sm-8 col-xs-12 description">' + data.message + '</div></div>');
}
	// "https://placekitten.com/40/40	