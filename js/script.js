$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var gender = $("#gender").val();
    var age = $("#age").val();
    var education = $("#education").val();
    var celebrity;

    if (gender === "Female" && age === "Young Adult (18-25)" && education === "Master's"){
      celebrity = "Madonna";
    }

    else if (gender === "Male" && age === "Young Adult (18-25)" && education === "Associate's"){
      celebrity = "Flume";
    }

    else if (gender === "Male" && age === "Middle Age(40-59)" && education === "Bachelor's"){
      celebrity = "Tom Cruise";
    }

    else{
      celebrity = "Loneliness :(";
    }
    $(".name").text(celebrity);
    event.preventDefault();
  });
});
