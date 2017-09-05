$(document).ready(function(){
  submitForm()
});


function submitForm() {
  $('form').on('submit', function(event){
  var input = $('#item').val();
  var node = document.createElement("LI");
  var textnode = document.createTextNode(input);
  node.appendChild(textnode);

  document.getElementById("list").children[0].appendChild(node);
  // document.getElementById("list").children[0].innerHTML += `<li>${input}</li>`
  // tests only passed with appendChild

  event.preventDefault();
});
}


