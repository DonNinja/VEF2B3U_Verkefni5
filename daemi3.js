//NodeList er DOM Query sem gefur fleira en eitt element.

var elements = document.getElementsByTagName('li'); //Finnur hvað það er mikið af Elementum með Tag "li"
if (elements.length > 0) { //Finnur hvort að það er eitthvað element með Tag "li"
	var el = elements[2]; //Setur þriðja elementið sem er með "li" tag-ið við variable 'el'
	el.className = 'cool'; //
} //Endar if statementið