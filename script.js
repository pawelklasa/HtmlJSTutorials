// function toggleClass(el) {
//   if (el.className === "class1") {
//     el.className = "class2";
//   } else {
//     el.className = "class1";
//   }
// }
function toggleClass(el) {
  var kids = document.getElementById('menu1').children;
  for (var i = 0; i < kids.length; i++) {
    kids[i].className = "class1";
  }
  el.className = "class2";
}

// printing document tutorial
function printContent(el) {
  var restorepage = document.body.innerHTML;
  var printcontent = document.getElementById(el).innerHTML;
  document.body.innerHTML = printcontent;
  window.print();
  document.body.innerHTML = restorepage;
}
