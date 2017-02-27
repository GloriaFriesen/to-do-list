function ToDo(toDo) {
  this.toDo = toDo;
}

$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();

    var inputtedToDo = $("input#to-do").val();

    var newToDo = new ToDo(inputtedToDo);

    $("ul#to-do-list").append("<li>" + newToDo.toDo + " (<span class='done-link'>Completed</span> | <span class='delete-link'>Delete</span>)</li>");

    $(".delete-link").last().click(function() {
      if (confirm("Remove from list?")) {
        $(this).parent().remove();
      }
    });

    $(".done-link").last().click(function() {
      $(this).parent().remove();
      $("#done-list").append("<li>" + newToDo.toDo + " <span class='delete-link'>Delete</span></li>");
      $(".delete-link").last().click(function() {
        if (confirm("Remove from list?")) {
          $(this).parent().remove();
        }
      });
    });

    $("input").val("");
  });
});
