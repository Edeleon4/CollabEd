var bodyText = 
	'<form class="filterform" action="#">
        <input class="filterinput" type="text">
    </form>';

var items = ["australia", "austria", "belgium"]

function createDemoList(names){
	listHTML = ""
	listHTML +=  '<ul id="list">';
	for (var i in names){
		listHTML += '<li><a href="#/' + names[i] + '/">' + names[i] + '</a></li>'
	}
	listHTML += '</ul>';

}
var items = ["australia", "austria", "belgium"]

var itemsText = createDemoList(items)
bodyText += itemsText;
