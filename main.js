var userCardText = document.getElementById("usertext");
var createButton = document.getElementById("createcard");
var cardsArea = document.getElementById("cards");
var counter = 1;


createButton.addEventListener("click", function() {
  if(userCardText.value) {
  cardsArea.innerHTML += "<div><span>" + userCardText.value + "</span><button id=button"+counter+" onClick=deleteDom(this.id)>Delete</button></div>"
  counter++;
  userCardText.value = "";
} else {
  alert("Put text into the card!");
}
});


function deleteDom (buttonid){
document.getElementById(buttonid).parentNode.remove();
}