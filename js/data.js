// use score like a normal variable, because it is one. then, eventually:
var setData = function(){
  var obj = {};
  obj["subject"] = {};
  var info1 ="Algebra stuffs";
  var info2 = 'Physics stuff';

  obj["subject"]["Algebra"] = 
  [{"name":"y = mx +b","type":"offense","info":info1},
  {"name":"x*y","type":"offense","info":info1}];

  obj["subject"]["Physics"] = 
  [{"name":"Motion","type":"science","info":info2},
  {"name":"p = mv","type":"science","info":info2}]

  for(var prop in obj["subject"]["Algebra"]){
    console.log(prop);
    obj[obj["subject"]["Algebra"][prop].name] = obj["subject"]["Algebra"][prop];
  }

  for(var prop in obj["subject"]["Physics"]){
    console.log(prop);
    obj[obj["subject"]["Physics"][prop].name] = obj["subject"]["Physics"][prop];
  }

  return obj;
}

