
window.sendMessage = (message) => {
	$.ajax({
	  // This is the url you should use to communicate with the parse API server.
	  url: SLACK_HOOK,
	  type: 'POST',
	  data: JSON.stringify(message),
	  contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
	  success: function (data) {
	    console.log('Game-Master: Message sent. Data: ', data);
	  },
	  error: function (data) {
	    console.error('Game-Master: Failed to send message. Error: ', data);
	  }
	});
}

window.composeMessage = ({text}) => {
	var message = {
		"username": "Translator-Bot",
	    "text": text,
	    "channel": "#random",//"channel": "#random",
	    "icon_emoji": ":speaking_head_in_silhouette:",
	    "roomname": "lobby"
	}

	return message;
}

window.chooseRandomMessage = (startMess, endMess, messArr) => {
	var findIndex = (array) => {
		var start, end;
		for(var i = 0; i < array.length; i++){
			if(array[i][1] === startMess){// && array[i][0] === "Game-Master"
				end = i;
			}
			if(array[i][1] === endMess ){//&& array[i][0] === "Game-Master"
				start = i;
			}
		}
		return [start, end]
	}
	var startAndEndIndicies = findIndex(messArr)
	var startIndex = startAndEndIndicies[0]
	var endIndex = startAndEndIndicies[1]
	
	var range = messArr.slice(startIndex + 1, endIndex)

	if(range.length === 0){
		return 'no-messages'
	}

	return range[Math.floor(Math.random() * range.length)]
}