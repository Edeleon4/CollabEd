var getMenuList = function(key){
  var ans = "";
  for(var prop in data["subject"][key]){
    console.log(data["subject"][key]);
        console.log("here");

    var playName = data["subject"][key][prop].info;
    ans = ans +'<li><a href="index.html?breadCrumb=' + playName+'">' + playName + '</a></li>';
  }
  if(ans === ""){
    ans = "<h4 style='text-align:center'>Currently you have no favorites</h4>";
  }
  return ans;
}

var getSubjectList = function(key){
          console.log("here");

  var ans = "";
  for(var prop in data["subject"]){
    console.log(key);
    ans = ans +'<li><a href="index.html?breadCrumb=' + prop+'">' + prop + '</a></li>';
  }
  if(ans === ""){
    ans = "<h4 style='text-align:center'>Currently you have no favorites</h4>";
  }
          console.log(ans);

  return ans;
}

// Read a page's GET URL variables and return them as an associative array.
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {

        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
$(document).ready(function(){
  $("#top").html(
      '<nav class="navbar navbar-default navbar-fixed-top">'+
        '<div class="container-fluid">'+
          '<!-- Brand and toggle get grouped for better mobile display -->'+
          '<div class="navbar-header">'+
            '<a class="navbar-brand" href="index.html?breadCrumb=Algebra">CollabEd</a>'+
          '</div>'+
          '<!-- Collect the nav links, forms, and other content for toggling -->'+
          '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">'+

            '<ul class="nav navbar-nav">'+
              '<li class="dropdown">'+
                '<a id="subjectHolder" href="index.html?breadCrumb=Algebra" class="dropdown-toggle disabled" data-toggle="dropdown" role="button" aria-expanded="false">Subject: Algebra<span class="caret"></span></a>'+
                '<ul class="dropdown-menu" role="menu">'+getSubjectList("Algebra")+
                '</ul>'+
              '</li>'+
            '</ul>'+

            
          '</div><!-- /.navbar-collapse -->'+
        '</div><!-- /.container-fluid -->'+
      '</nav>');
      $( ".dropdown" ).hover(function() {
        $( this ).toggleClass("open");
      }, function() {
        $( this ).toggleClass("open");
      });
});