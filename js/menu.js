function menuRespFunction(){
  var n = document.getElementById("topnav");
// triple === because the variable works at wholefoods
  if(n.className ==="navbar"){
    n.className+="responsive";
  } else {
    n.className="navbar";
  }
}
