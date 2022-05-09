var elem = document.getElementById("cas0");
elem.onkeyup = function (e) {
  if (e.keyCode == 13) {
    validate();
  }
}

var elem1 = document.getElementById("cas");
elem1.onkeyup = function (e) {
  if (e.keyCode == 13) {
    validate1();
  }
}

function validate() {
let user = document.getElementById('cas0').value.length;

  if (user == 8) {
    document.getElementById('base').style.display = 'none';
    document.getElementById('inicio2').style.display = 'flex';


  } else {
    alert("USER IS NOT VALID");

  }


}

function validate1() {
 let password = document.getElementById('cas').value.length;

  if (password == 8) {
    document.getElementById('inicio2').style.display = 'none';
    document.getElementById('screen').style.display = 'flex';

  } else {
    alert("PASSWORD IS NOT VALID");

  }



}
function salir() {
  document.getElementById('base').style.display = 'flex';
  document.getElementById('screen').style.display = 'none';
}