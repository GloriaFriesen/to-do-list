function ToDo(toDo) {
  this.toDo = toDo;
}

$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();

    var inputtedToDo = $("input#to-do").val();

    var newToDo = new ToDo(inputtedToDo);

    $("ul#to-do-list").append("<li>" + newToDo.toDo + " <span class='to-do-link'>Done</span></li>");

    $(".to-do-link").last().click(function() {
      if (confirm("Remove from list?")) {
        $(this).parent().remove();
      }
    });

    $("input").val("");
  });
});
