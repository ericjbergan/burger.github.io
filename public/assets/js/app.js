$(function () {
    $("#submit").click(function (event) {

        var newBurger = {
            burger_name: $("#newBurger").val().trim(),
        };

        if (newBurger === {burger_name: ""}) {
            return;
        } else {
            $.post("/api/new", newBurger)
                .then(function (data) {
                    location.reload();
                });
        };
    });
});

$(function () {
    $("#devour").click(function (event) {
        var id = $(this).data("id");
        console.log('YES GOT ID', id)
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: true
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});

$(function () {
    $("#delete").click(function (event) {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE",
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});

