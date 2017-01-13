// function toggleClass(el) {
//   if (el.className === "class1") {
//     el.className = "class2";
//   } else {
//     el.className = "class1";
//   }
// }
//Boxes

function toggleClass (el) {
  var kids = document.getElementById('menu1').children;
  for (var i = 0; i < kids.length; i++) {
    kids[i].className = 'class1';
  }  el.className = 'class2';
}

// printing document tutorial
function printContent (el) {
  var restorepage = document.body.innerHTML;
  var printcontent = document.getElementById(el).innerHTML;
  document.body.innerHTML = printcontent;
  window.print();
  document.body.innerHTML = restorepage;
}

// form + print
function write_name() {
  var welcome_perra = document.getElementById('welcome');
  var name = document.getElementById('name');

  welcome_perra.innerHTML = 'welcome ' + name.value;
}

//validation
function checkInfo() {
  var userName = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username == '' || password == '') {
    alert('Please fill in all fields');
    return false;
  } else {
    return true;
  }
}
