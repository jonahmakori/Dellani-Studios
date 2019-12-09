function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  if (name == "") {
    alert("please fill in your name");
    return false;
  } else if (email == "") {
    alert("Please fill in your name and email");
    return false;
  } else {
    alert(
      name +
        ", we have received your message. Thank you for reaching out to us."
    );
  }
  event.preventDefault();
}
$(document).ready(function() {
  $("#designImage").click(function() {
    $("#design").show("2000");
    $("#designImage").hide("slow")
  });
  $("#design").click(function() {
    $("#designImage").show("2000");
    $("#design").hide("slow")
  });
  $("#developImage").click(function() {
    $("#development").show("2000");
    $("#developImage").hide("slow")
  });
  $("#development").click(function() {
    $("#developImage").show("2000");
    $("#development").hide("slow")
  });
  $("#productImage").click(function() {
    $("#product").show("2000");
    $("#productImage").hide("slow")
  }); 
  $("#product").click(function() {
    $("#productImage").show("2000");
    $("#product").hide("slow")
  });

  $("#1st-project").hover(
    function() {
      $("#1st").show("2000");
    },
    function() {
      $("#1st").hide("2000");
    }
  );
  $("#2nd-project").hover(
    function() {
      $("#2nd").show("2000");
    },
    function() {
      $("#2nd").hide("2000");
    }
  );
  $("#3rd-project").hover(
    function() {
      $("#3rd").show("2000");
    },
    function() {
      $("#3rd").hide("2000");
    }
  );
  $("#4th-project").hover(
    function() {
      $("#4th").show("2000");
    },
    function() {
      $("#4th").hide("2000");
    }
  );
  $("#5th-project").hover(
    function() {
      $("#5th").show("2000");
    },
    function() {
      $("#5th").hide("2000");
    }
  );
  $("#6th-project").hover(
    function() {
      $("#6th").show("2000");
    },
    function() {
      $("#6th").hide("2000");
    }
  );
  $("#7th-project").hover(
    function() {
      $("#7th").show("2000");
    },
    function() {
      $("#7th").hide("2000");
    }
  );
  $("#8th-project").hover(
    function() {
      $("#8th").show("2000");
    },
    function() {
      $("#8th").hide("2000");
    }
  );
});
