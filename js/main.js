function initCanvas(){
  var ctx = $("#my_canvas")[0].getContext('2d');
  var cW = ctx.canvas.width, cH = ctx.canvas.height;

  var colours = ["black","blue","green","cyan","red","purple","yellow","white"];
  var letters = [[[0,1,0],[0,1,0],[1,0,1],[1,1,1],[1,0,1]],[[1,1,1,0],[1,0,0,1],[1,1,1,0],[1,0,0,1],[1,1,1,0]],[[0,1,1,0],[1,0,0,1],[1,0,0,0],[1,0,0,1],[0,1,1,0]],[[1,1,1,0],[1,0,0,1],[1,0,0,1],[1,0,0,1],[1,1,1,0]],[[1,1,1],[1,0,0],[1,1,1],[1,0,0],[1,1,1]],[[1,1,1],[1,0,0],[1,1,1],[1,0,0],[1,0,0]],[[0,1,1,1,1],[1,0,0,0,0],[1,0,0,1,1],[1,0,0,0,1],[0,1,1,1,1]],[[1,0,0,1],[1,0,0,1],[1,1,1,1],[1,0,0,1],[1,0,0,1]],[[1],[1],[1],[1],[1]],[[0,0,1],[0,0,1],[0,0,1],[1,0,1],[1,1,0]],[[1,0,0,1],[1,0,1,0],[1,1,0,0],[1,0,1,0],[1,0,0,1]],[[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,1,1]],[[1,0,0,0,1],[1,0,0,0,1],[1,1,0,1,1],[1,1,0,1,1],[1,0,1,0,1]],[[1,0,0,1],[1,1,0,1],[1,1,0,1],[1,0,1,1],[1,0,0,1]],[[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],[[1,1,1],[1,0,1],[1,1,1],[1,0,0],[1,0,0]],[[0,1,1,1,0],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,1,0],[0,1,1,0,1]],[[1,1,1,1],[1,0,0,1],[1,1,1,1],[1,0,1,0],[1,0,0,1]],[[0,1,1],[1,0,0],[1,1,1],[0,0,1],[1,1,0]],[[1,1,1],[0,1,0],[0,1,0],[0,1,0],[0,1,0]],[[1,0,0,1],[1,0,0,1],[1,0,0,1],[1,0,0,1],[0,1,1,0]],[[1,0,1],[1,0,1],[1,0,1],[0,1,0],[0,1,0]],[[1,0,1,0,1],[1,0,1,0,1],[1,0,1,0,1],[1,0,1,0,1],[0,1,0,1,0]],[[1,0,1],[0,1,0],[0,1,0],[0,1,0],[1,0,1]],[[1,0,1],[0,1,0],[0,1,0],[0,1,0],[0,1,0]],[[1,1,1],[0,0,1],[0,1,0],[1,0,0],[1,1,1]],[[0,1,0],[1,1,0],[0,1,0],[0,1,0],[0,1,0]],[[1,1,1],[0,0,1],[0,1,0],[1,0,0],[1,1,1]],[[1,1,1],[0,0,1],[0,1,0],[0,0,1],[1,1,1]],[[0,0,1],[0,1,1],[1,0,1],[1,1,1],[0,0,1]],[[1,1,1],[1,0,0],[1,1,1],[0,0,1],[1,1,1]],[[0,1,1],[1,0,0],[1,1,1],[1,0,1],[1,1,1]],[[1,1,1],[0,0,1],[0,1,0],[0,1,0],[0,1,0]],[[1,1,1],[1,0,1],[0,1,0],[1,0,1],[1,1,1]],[[1,1,1],[1,0,1],[1,1,1],[0,0,1],[1,1,0]],[[1,1,1],[1,0,1],[1,0,1],[1,0,1],[1,1,1]],[[0,0],[0,0],[0,0],[0,0],[0,0]]];
  var letterseq = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"," "];
  var conversions = [[";drawbox(", "DB"],[";write(","WR"],["new Array(", "AR"],[";draw = function(){", "DR"],[";update = function(){", "UP"],["function(){", "FU"],["\n\rif( ", "IF"],["\n\relse", "EL"],["\n\relse if(", "EI"],[";while(", "WH"],[";for", "FR"],["keyup", "KU"],["keydown", "KD"],["keyleft", "KL"],["keyright", "KR"],["keyspace", "KS"],["keyenter", "KE"],["tiltup", "TU"],["tiltdown", "TD"],["tiltleft", "TL"],["tiltright", "TR"],[">=", "GE"],["<=", "LE"],[">", "GT"],["<", "LT"],["==", "EE"],["||", "OR"],["~", "TI"],["!=", "NE"],["!", "NO"],["&&", "AN"],["*=", "ME"],["/=", "DE"],["*", "MU"],["/", "DI"],["%", "MO"],["\\", "ES"],["(", "LB"],[")", "RB"],["{\n", "*"],["}\n", "."],["[","LS"],["]","RS"],[",", "/"],["=","%"],[";\n", ":"]];

  keyup = false;
  keydown = false;
  keyleft = false;
  keyright = false;
  keyspace = false;
  $A = $B = $C = $D = $E = $F = $G = $H = $I = $J = $K = $L = $M = $N = $O = $P = $Q = $R = $S = $T = $U = $V = $W = $X = $Y = $Z = $0 = $1 = $2 = $3 = $4 = $5 = $6 = $7 = $8 = $9 = 0;

  draw = function(){};
  update = function(){};

  var program = "$A=0$B=0DRWRQSWELCOMEQS,$A,$B,7RB.UP$A++$B++IF$BGT90RB*$A=0$B=0..";

  eval(decompress(program));
  console.log(program);
  function animate(){
    update();
    updateDebug();
    render();
    draw();
  }

  function update(){}
  function draw(){}

  function updateDebug(){
    var display = $("#debug");
    display.html('');
    for(s in letterseq){
      if(letterseq[s]==' ') break;
      var v = "$" + letterseq[s];
      display.append(v + " : " + window[v] + "<br>");
    }
  }

  function drawbox(x,y,w,h,c){
    ctx.fillStyle = colours[c];
    ctx.fillRect(x*5,y*5,w*5,h*5);
  }

  function render(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,cW,cH);
  }

  function write(text, x, y, c){
    text = String(text);
    var pos = 0;
    for(var i = 0; i < text.length; i++){
      var ch = text.charAt(i);
      var letter = letters[letterseq.indexOf(ch)];

      for(var j = 0; j < 5; j++){
        for(var k = 0; k < letter[0].length; k++){
          if(letter[j][k] == 1)drawbox(x + k + pos, y + j, 1, 1, c);
        }
      }

      pos += letter[0].length + 1;
    }
  }

  function decompress(data){
    //extract all quoted sections
    var quotes = data.match(/QS[^Q]+QS/g);
    if(quotes){
      for(var i = 0; i < quotes.length;i++){
        data = data.replace(quotes[i],"?"+i);
      }
    }

    data = data.replace(/\$([A-Z])(?=\$)|\d+(?=\$)/g, '$&;');
    data = data.replace(/\+\+|--/g, '$&;');
    data = data.replace(/\+;RB/g, '+RB');

    //space all variables and codes
    data = data.replace(/\$[A-Z0-9]|[A-Z]{2}/g, ' $& ');

    //replace variable names
    for (var i = 0; i < conversions.length; i++) {
      while (data.indexOf(conversions[conversions.length-1-i][1]) > -1) {
        data = data.replace(conversions[conversions.length-1-i][1], conversions[conversions.length-1-i][0]);
      }
    }

    //replace quotes
    if(quotes){
      var quotePlace = data.match(/\?\d+/g);
      for(var i = 0; i < quotePlace.length;i++){
        data = data.replace("?"+i, quotes[i].replace(/QS/g,"\""));
      }
    }

    data = data.replace(/\n/g,"");
    return data;
  }

  document.addEventListener('keydown', function(event) {
    var key = (event.keyCode);
    switch(key){
      case 32: keyspace = true;break;
      case 37: keyleft = true;break;
      case 38: keyup = true;break;
      case 39: keyright = true;break;
      case 40: keydown = true;break;
    }
  });

  document.addEventListener('keyup', function(event) {
    var key = (event.keyCode);
    switch(key){
      case 32: keyspace = false;break;
      case 37: keyleft = false;break;
      case 38: keyup = false;break;
      case 39: keyright = false;break;
      case 40: keydown = false;break;
    }
  });

  document.getElementById("run").onclick = runCode;

  function runCode(){
    var code = document.getElementById("code").value.replace(/ /g,'');
    eval(decompress(code));
  }

  var timer = $.timer(animate);
  timer.set({ time:1000/30 , autostart:true});
}

window.addEventListener('load', function(event) { initCanvas(); }); 