$(document).ready(function(){
	var bodyText = '<form class="filterform" action="#"><input class="filterinput" type="text"></form>';

	var items = ["australia", "austria", "belgium"]

	function createDemoList(names){
		listHTML = ""
		listHTML +=  '<ul id="list">';
		for (var i in names){
			listHTML += '<li><a href="#/' + names[i] + '/">' + names[i] + '</a></li>'
		}
		listHTML += '</ul>';
		return listHTML;

	}
	var items = ["australia", "austria", "belgium"]

	var itemsText = createDemoList(items)
	bodyText += itemsText;
	$("#left_nav_bar").html(bodyText);

	(function($) {

    $('.filterinput').keyup(function() {
        var a = $(this).val();
        if (a.length > 2) {
            // this finds all links in the list that contain the input,
            // and hide the ones not containing the input while showing the ones that do
            var containing = $('#list li').filter(function () {
                var regex = new RegExp('\\b' + a, 'i');
                return regex.test($('a', this).text());
            }).slideDown();
            $('#list li').not(containing).slideUp();
        } else {
            $('#list li').slideDown();
        }
        return false;
    })

}(jQuery));
})


