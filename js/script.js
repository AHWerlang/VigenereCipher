function encryptMessage() {
	
	var alphabetic = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "Á", "É", "Í", "Ó", "Ú", "Â", "Ê", "Ô", "Ã", "Õ", "À", "Ç"]
	var enterText = document.getElementById("text-to-convert").value.toUpperCase();
	var keyword = document.getElementById("keyword").value.toUpperCase();
	var encryptMessage = "";
	var f = 0;
	var k = 0;

	for (var i = 0; i < enterText.length; i++) {
		if (f < keyword.length) {
		
		} else {
			f = 0
		}

		if (alphabetic.indexOf(enterText[i]) == -1 || alphabetic.indexOf(keyword[f]) == -1) {
			encryptMessage += enterText[i]
		} else {
			k = (alphabetic.indexOf(enterText[i]) + alphabetic.indexOf(keyword[f])) % 39; 
			encryptMessage += alphabetic[k];
		}
	f++
	}

document.getElementById("encrypt-message").value = encryptMessage;
}

function decodeMessage() {
	
	var alphabetic = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "Á", "É", "Í", "Ó", "Ú", "Â", "Ê", "Ô", "Ã", "Õ", "À", "Ç"]
	var enterText = "";
	var keyword = document.getElementById("keyword").value.toUpperCase();
	var encryptMessage = document.getElementById("encrypt-message").value.toUpperCase();
	var f = 0;
	var k = 0;

	for (var i = 0; i < encryptMessage.length; i++) {
		if (f < keyword.length) {
		
		} else {
			f = 0
		}

		if (alphabetic.indexOf(encryptMessage[i]) == -1 || alphabetic.indexOf(keyword[f]) == -1) {
			enterText += encryptMessage[i]
		} else {
			k = (39 + (alphabetic.indexOf(encryptMessage[i]) - alphabetic.indexOf(keyword[f]))) % 39; 
			enterText += alphabetic[k];
		}
	f++
	}

document.getElementById("text-to-convert").value = enterText;
}