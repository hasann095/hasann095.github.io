var a = false;

function add() {
  let x = parseInt(document.getElementById('number1').value);
  let y = parseInt(document.getElementById('number2').value);
  console.log(x+y);
  document.getElementById("result").innerHTML = x+y;
}

// console.log(add(x,y));

function add2(z) {
  var result = 0;
  for(let i=z; i>0; i--){
    result = result + i;
  }
  return result
}

// console.log(add2(3))

function changetoPink() {
  var x = document.getElementById("heading");
  x.style.color = "pink";
}

setInterval (function (){

    if (a==false){
      document.getElementById("heading").style.color = 'blue';
      a = true;
    }

    else {
      document.getElementById("heading").style.color = 'pink';
      a = false;
    }
}, 1000);
