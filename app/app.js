function postToGoogle() {
    var field1 = $("#Name").val();
    var field2 = $("#Email").val();
    var field3 = $("#Phone").val();
    var field4 = $("#Message").val();

    $.ajax({
      url: "{https://docs.google.com/forms/u/1/d/e/1FAIpQLSfucdxjGkujDPmL0vpGrJ16zjrayNkLGJg-8_7WBAVxwpwcdw/formResponse}",
        
      //google forum    
      data: {
        "entry.111334685": field1,
        "entry.1680758593": field2,
        "entry.1184312553": field3,
        "entry.1804124301": field4,
        "entry.192861214": field5
      },
      type: "POST",
      dataType: "xml",
      success: function (d) {
        $('#contact').trigger('reset');
      },
      error: function (x, y, z) {
        $('#contact').trigger('reset');
      }
    });
    return false;
  }