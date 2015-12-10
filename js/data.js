// use score like a normal variable, because it is one. then, eventually:
var setData = function(){
  var obj = {};
  obj["subject"] = {};
  var info1 ="Algebra stuffs";
  var info2 = 'Physics stuff';

  obj["subject"]["Algebra"] =
  [{"name":"y = mx +b","type":"offense","info":info1, "id": 0},
  {"name":"x*y","type":"offense","info":info1, 'id': 0}];

  obj["subject"]["Physics"] =
  [{"name":"Motion","type":"science","info":info2, "id": 0},
  {"name":"p = mv","type":"science","info":info2, 'id': 0}]

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

var setDrafts = function() {
       // this is a huge hack to have some lesson plans demo-able
       if (localStorage.getItem("editor-?id=0-mce_0draft") === null) {
       localStorage.setItem("editor-?id=0-mce_0draft", "Linear Equation&nbsp;Lesson Plan");
       }
       if (localStorage.getItem("editor-?id=0-mce_0time") === null) {
       localStorage.setItem("editor-?id=0-mce_0time", "1449781161102");
       }
       if (localStorage.getItem("editor-?id=0-mce_1draft") === null) {
       localStorage.setItem("editor-?id=0-mce_1draft", "<h2>Mathematical goals</h2><p>This lesson unit is intended to help you assess how well students are able to:</p><ul><li>Solve linear equations in one variable with rational number coefficients.</li><li>Collect like terms.</li><li>Expand expressions using the distributive property.</li><li>Categorize linear equations in one variable as having one, none, or infinitely many solutions.</li></ul><p>It also aims to encourage discussion on some common misconceptions about algebra.</p><h2>Introduction</h2><p>This lesson unit is structured in the following way:</p><ul><li>Before the lesson, students work individually on an assessment task that is designed to reveal their current understanding and difficulties. You then review their responses and create questions for students to consider when improving their work.</li><li>After a whole-class introduction, students work in small groups on a collaborative discussion task, categorizing equations based on the number of solutions. Throughout their work, students justify and explain their thinking and reasoning.</li><li>In the same small groups, students critique the work of others and then discuss as a whole-class what they have learned.</li><li>In a follow-up lesson, students return to their original task and try to improve their own, individual responses.</li></ul><h2>Materials required</h2><ul><li>Each student will need two copies of the assessment task <em>When are the equations true?, </em>a mini-whiteboard, a pen, and an eraser and a copy of <em>When are the equations true? (revisited).</em></li><li>Each small group of students will need <em>Card Set</em>: <em>Equations</em>, a pair of scissors, a pencil, a marker, a glue stick, and a large sheet of paper for making a poster<em>.</em></li><li>There is a projector resource to support the whole-class introduction.</li></ul><h2>Time needed</h2><p>15 minutes before the lesson for the assessment task, a 70-minute lesson (or two shorter ones), and 10 minutes in a follow-up lesson. Timings are approximate. Exact timings will depend on the needs of the class.</p>");
       }
       if (localStorage.getItem("editor-?id=0-mce_1time") === null) {
       localStorage.setItem("editor-?id=0-mce_1time", "1449781161102");
       }
}


