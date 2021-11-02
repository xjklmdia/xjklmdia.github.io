
var modal = document.getElementById("myModal");
var btn= document.getElementById("toCart");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
  modal.style.display = "block";
  console.log("I have been clicked");
}

span.onclick = function(){
  modal.style.display = "none";
}

window.onclick = function(event){
  if(event.target== modal){
    modal.style.display = "none";
    console.log("closing");
  }
}
