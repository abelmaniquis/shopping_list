/* $("#items p").wrap("<strike>");*/



$(document).ready(readyFunction);
var itemCount = 0;
function readyFunction() {
	$("#btn1").click(btnClick);
	$('.list').on('click', 'li', lineThrough);
	$('ul').on('dblclick', 'li', doubleClick);
	$("#btn2").click(emptyInput);
	$("button").hover(mouseOver, mouseOut);
	$(document).keydown(enterPressed);
}

function btnClick() {
	itemCount += 1
	appendItem('.list', 'li', $(".list-input").val(), '.list-input');
	console.log(itemCount);
	
}

function appendItem(element, item, value, input) {
	$(element).append('<' + item + '>' + value + '</' + item + '>');
	$(input).val('');
}

function lineThrough() {
	$(this).toggleClass("stroked");
}

function doubleClick() {
	itemCount -= 1;
	$(this).hide();
}

function emptyInput() {
	itemCount = 0;
	$("ul").empty();
}

function enterPressed(event) {
	if (event.keyCode == 13) {
		appendItem('.list', 'li', $(".list-input").val(), '.list-input');
	itemCount += 1;
	appendItem('#count-container')
	}
	console.log(itemCount);
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
   