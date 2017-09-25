var btn = document.getElementById("btn");
var names = document.getElementById("text");
btn.addEventListener("click", function(){
  var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
ourRequest.onload = function() {
  var ourData = JSON.parse(ourRequest.responseText);   
  renderHTML(ourData);
};

ourRequest.send();
});
var html = "";
function renderHTML(data) {
  for(i = 0; i < data.length; i++) {
    html += "<p>"+ data[i].name + " is age of " + data[i].age + " and lives in "+ data[i].country + ". </p>";
  }
  names.insertAdjacentHTML('beforeend', html);
};