var changeToPlay = function(play){

	if(play !== undefined ){
        if (play.name == '+') {
            location.assign("create.html");
        } else {
    	    location.assign("create.html?id="+play.id);
        }
    	console.log("changetoPlay");
	}
}
console.log("loaded");

var createHomePage = function(plays, menuType){
	$("#subjectHolder").html("Subject: " + menuType);
	var bodyText = "";
	if (menuType) {
		bodyText = '<div class="row">'+
			        '<ol class="breadcrumb">'+
			          '<li><a href="index.html">Home</a></li>'+
			          '<li id="titleCrumb">'+ menuType +'</li>'+
			        '</ol>'+
			      '</div>';
	} else {
		bodyText = '<div class="row">'+
				        '<ol class="breadcrumb">'+
				          '<li>All Courses</li>'+
				        '</ol>'+
				    '</div>'
	}
	var playNames = [];
	plays.push({"name":"+"});
	for(var i = 0; i < Math.min(12,plays.length);i++){
		playNames.push(plays[i].name);
		var thumbnail = "";
		thumbnail += '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-6 text-center" ><div class="thumbnail">';
		//todo link redirect
        thumbnail +='<div class="text playClick" name="'+plays[i].name+'">'+plays[i].name;
		var multiplier = 30;
		var imgWidth = 5*multiplier;
		var imgHeight =3*multiplier;

        thumbnail += '</div></div></div>';
		if(i%4 == 0){
			thumbnail = '<div class="row">'+thumbnail;
			if(i == Math.min(12,plays.length)-1){
				thumbnail+= '</div>';
			}
		}else if(i%4 == 3|| i == Math.min(12,plays.length)-1){
			thumbnail+= '</div>';
		}
		bodyText +=thumbnail;

	}

	$("#main_content").html(bodyText);
	$(".playClick").click(function(){

		console.log("playClick");
		var name = $(this).attr("name");
		console.log(name);
		var play = undefined;
		if(name == "+"){
    		play = {"name":"+"};

		} else{
    		play = data[$(this).attr("name")];
		}
        changeToPlay(play);
    });

}




$(document).ready(function(){

    var defenseMoves = data["subject"]["Algebra"];
    var offenseMoves = data["subject"]["Physics"];
    var moves = [];

    var summedLength = defenseMoves.length+offenseMoves.length;
    var menuType = getUrlVars()["breadCrumb"];
    data["current"] = menuType;
    if (menuType){
    	moves = data["subject"][menuType]
    }else{
    	for(var i = 0;i< summedLength;i++){
	    	if(i < defenseMoves.length){
	    		moves.push(defenseMoves[i]);
	    	}else{
	    		moves.push(offenseMoves[i%defenseMoves.length]);
	    	}
    	}
    }
    console.log(moves)
    createHomePage(moves, menuType);
    console.log($("#search-field-input"));


});
