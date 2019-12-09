$(document).ready(function () {
  $("#designImage").click(function () {
    $("#design").show();
    $("#designImage").hide("slow")
  });
  $("#design").click(function () {
    $("#designImage").show();
    $("#design").hide("slow")
  });
  $("#developImage").click(function () {
    $("#development").show();
    $("#developImage").hide("slow")
  });
  $("#development").click(function () {
    $("#developImage").show();
    $("#development").hide("slow")
  });
  $("#productImage").click(function () {
    $("#product").show();
    $("#productImage").hide("slow")
  });
  $("#product").click(function () {
    $("#productImage").show();
    $("#product").hide("slow")
  });

  $("#1st-project").hover(
    function () {
      $("#1st").show("2000");
    },
    function () {
      $("#1st").hide("2000");
    }
  );
  $("#2nd-project").hover(
    function () {
      $("#2nd").show("2000");
    },
    function () {
      $("#2nd").hide("2000");
    }
  );
  $("#3rd-project").hover(
    function () {
      $("#3rd").show("2000");
    },
    function () {
      $("#3rd").hide("2000");
    }
  );
  $("#4th-project").hover(
    function () {
      $("#4th").show("2000");
    },
    function () {
      $("#4th").hide("2000");
    }
  );
  $("#5th-project").hover(
    function () {
      $("#5th").show("2000");
    },
    function () {
      $("#5th").hide("2000");
    }
  );
  $("#6th-project").hover(
    function () {
      $("#6th").show("2000");
    },
    function () {
      $("#6th").hide("2000");
    }
  );
  $("#7th-project").hover(
    function () {
      $("#7th").show("2000");
    },
    function () {
      $("#7th").hide("2000");
    }
  );
  $("#8th-project").hover(
    function () {
      $("#8th").show("2000");
    },
    function () {
      $("#8th").hide("2000");
    }
  );
});
function validateForm() {
  var name = document.getElementById("mce-NAME").value;
  var email = document.getElementById("mce-EMAIL").value;
  if (name == "" , email== "") {
    alert("Please input name and email")
   event.preventDefault();
  } 
  
   else {
    alert(name +
      ", we have received your message. Thank you for reaching out to us."
    ); event.allowDefault();
  }
 
}
