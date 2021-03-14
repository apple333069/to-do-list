$(document).ready(function(){
  $("#add").click(function(){
    if($("#inputNew").val().length > 0 && $("#inputNew").val() != ""){
      var NewVal=$("#inputNew").val();
      $(".list-group").append(`<li class="list-item">
          <input id="item5" type="checkbox">
          <label for="item5">${NewVal}</label>
          <button class='delete'><i class="far fa-trash-alt"></i></button>
        </li>`)
      $("#inputNew").val("");
    }else{
      $("#inputNew").val("");
    }
  });       
});
$("#inputNew").on("keydown", (e) => {
  if (e.keyCode == 13) {
    $("#add").click();
    $("#inputNew").val("");
  }
})
$(".delete").click(function(){
  $(this).parent("li").remove();
})
