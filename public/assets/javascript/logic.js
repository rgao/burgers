$(function() {
    $(".eat-btn").on("click", function(event) {
        event.preventDefault();

      var id = $(this).data("id");
  
      var eatenStatus = {
        devoured: 1
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: eatenStatus
      }).then(
        function() {
          console.log("changed devoured to true");
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burger-input").val().trim(),
        devoured: 0
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  });