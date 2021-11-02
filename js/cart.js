$(function() {
  var //valueCount = $("counter").value(),
      counter = $("#farm"),
      addBtn = $("#add"),
      subBtn = $("#sub"),
      value = $("#farm").html();


  addBtn.on("click", function() {
    counter.html(value ++);
    console.log(value);
    return

  });

  subBtn.on("click",function(){
  counter.html(value--);
  console.log(value);
  return
  });


});
