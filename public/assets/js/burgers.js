$(function () {
    $(".change-eaten").on("click", function (event) {
        let id = $(this).data("id");
        let newEaten = $(this).data("neweaten");

        let eatenStatus = {
            devoured: newEaten
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eatenStatus
        }).then(
            function() {
                console.log("Set eaten to ", newEaten);

                location.reload();
            }
        );
    });

    $(".createBurger").on("submit", function(event) {
        event.preventDefault();

        let addedBurger = {
            burger_name: $("#createB").val().trim(),
            devoured: $("[name=eaten]").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: addedBurger
        }).then(
            function() {
                console.log("Added burger to list");
                location.reload();
            }
        )
    })
})