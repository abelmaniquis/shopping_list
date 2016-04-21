/* $("#items p").wrap("<strike>");*/

$(document).ready(runWhenDocumentIsReady);


function runWhenDocumentIsReady() {

	$("#btn1").click(btnClick);
	$('.list').on('click', 'li', lineThrough);
	$('ul').on('dblclick', 'li', doubleClick);
	$("#btn2").click(emptyInput);
	$("button").hover(mouseOver, mouseOut);
	$(document).keydown(enterPressed);

}

function btnClick() {
	appendItem('.list', 'li', $(".list-input").val(), '.list-input');
}

function appendItem(element, item, value, input) {
	$(element).append('<' + item + '>' + value + '</' + item + '>');
	$(input).val('');
}

function lineThrough() {
	$(this).toggleClass("stroked");
}

function doubleClick() {
	$(this).hide();
}

function emptyInput() {
	$("ul").empty();
}

function enterPressed(event) {
	if (event.keyCode == 13) {
		appendItem('.list', 'li', $(".list-input").val(), '.list-input');
	}
}

function mouseOver() {
	$(this).css('color', 'blue');
}

function mouseOut() {
	$(this).css('color', 'white');
}

function changeStyle(element, property, value) {
	$(element).css(property, value);
}
    
/*App should do these things:
Append items to the list
allow users to check it off
Allow users to remove items on list
*/