

window.searchMessages = (callback) => {
	
	var obj = $.get( "https://slack.com/api/channels.history?token="
		+ SLACK_TOKEN
		+"&channel=C0N8A5PMZ&latest=0&oldest=1000&inclusive=0&count=500&unreads=0&pretty=1", function( data ) {
		$( ".result" ).html( data );
	}).done( () => {
	  	return callback(obj.responseJSON)
	});
}

window.detectLang = (message, callback) => {
	var obj = $.get( "https://translate.yandex.net/api/v1.5/tr.json/detect?lang=en-ar&key=" + YANDEX_KEY + "&text=" + message, function( data ) {
		$( ".result" ).html( data );
	}).done( () => {
	  	return callback(obj.responseJSON.lang)
	})
}

window.translateMessage = (message, lang, callback) => {
	var fromTo = "en-ar"
	if(lang === 'ar'){
		fromTo = 'ar-en'
	} else if (lang === 'ko') {
		fromTo = 'ko-en'
	}

	var obj = $.get( "https://translate.yandex.net/api/v1.5/tr.json/translate?lang="+fromTo+"&key=" + YANDEX_KEY + "&text=" + message, function( data ) {
		$( ".result" ).html( data );
	}).done( () => {
	  	return callback(obj.responseJSON.text)
	})
}

window.organizeMessages = (data) => {
	var messagesList = data.messages.filter(element => ((element.subtype === undefined) || (element.username !== undefined))
	 && (element.subtype !== "file_share"))

	var result = messagesList.map(element => {
		var theDate = new Date(element.ts * 1000);
		var dateString = theDate.toGMTString();
		if(element.subtype === "bot_message"){
			return [element.username, element.text, dateString.slice(0, dateString.length-4)]
		} else {
			return [users.filter(e => e[0] === element.user)[0][1], element.text, dateString.slice(0, dateString.length-4)]
		}
	})
	return result
}