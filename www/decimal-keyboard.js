var DecimalKeyboard = function() {
	
};
DecimalKeyboard.getActiveElementType= function(){
	return document.activeElement.type;
};
DecimalKeyboard.isDecimal = function(){
	var showDecimal = null;
	var activeElement = document.activeElement;
	if(activeElement.attributes["decimal"]==undefined || 
		activeElement.attributes["decimal"]=="undefined" || 
		activeElement.attributes["decimal"].value=="false"){
		showDecimal = false;
	}else{
		showDecimal = true;
	}
	return showDecimal;
};
DecimalKeyboard.getDecimalChar = function(activeElement){
	
	if(activeElement==undefined || activeElement==null || activeElement=="undefined")
		activeElement = document.activeElement;

	var decimalChar = null;
	if(activeElement.attributes["decimal-char"]==undefined || 
		activeElement.attributes["decimal-char"]=="undefined"){
		decimalChar=".";
	}else{
		decimalChar=activeElement.attributes["decimal-char"].value;
	}
	return decimalChar;
};
DecimalKeyboard.getButtonChar = function(activeElement){
	
	if(activeElement==undefined || activeElement==null || activeElement=="undefined")
		activeElement = document.activeElement;

	var char = null;
	if(activeElement.attributes["button-char"]==undefined || 
		activeElement.attributes["button-char"]=="undefined"){
		char=",";
	}else{
		char=activeElement.attributes["button-char"].value;
	}
	return char;
};
DecimalKeyboard.addDecimalAtPos = function(){

};
DecimalKeyboard.addDecimal = function(){
	var activeElement = document.activeElement;
	var allowMultipleDecimals = true;
	if(activeElement.attributes["allow-multiple-decimals"]==undefined || 
		activeElement.attributes["allow-multiple-decimals"]=="undefined" || 
		activeElement.attributes["allow-multiple-decimals"].value=="false"){
		allowMultipleDecimals = false;
	}
	var value = activeElement.value;
	var valueToSet = "";
	var decimalChar = DecimalKeyboard.getDecimalChar(activeElement);
	var caretPosStart = activeElement.selectionStart;
	var caretPosEnd = activeElement.selectionEnd;
	var first="";
	var last="";
	
	first = value.substring(0, caretPosStart);
	last = value.substring(caretPosEnd);

	if(allowMultipleDecimals){
		valueToSet = first+decimalChar+last;
	}else{
		if(value.indexOf(decimalChar) > -1)
			return;
		else{
			if(caretPosStart==0){
				first="0";
			}
			valueToSet = first+decimalChar+last;

		}
	}

    activeElement.value = valueToSet;
};


module.exports = DecimalKeyboard;
