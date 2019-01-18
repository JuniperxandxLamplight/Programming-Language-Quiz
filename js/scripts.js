$(function(){
  var html = 0;
  var cSharp = 0;
  var java = 0;
  var php = 0;
  var ruby = 0;

  $("#startButton").click(function(){
    $("#question1").show();
    $("#startButton").hide();
  });

  $("#q1Button").click(function(){
    var whichEnd = $("input:radio[name=whichEnd]:checked").val();

    if (whichEnd === "visual"){
      html += 1;

      $("#question1").hide();
      $("#question2").show();
    } else if (whichEnd === "functionality"){
      cSharp += 1;
      java += 1;
      php += 1;
      ruby += 1;

      $("#question1").hide();
      $("#question2").show();
    } else {
      $("#q1Error").text("Please select an answer.");
    }
  });

  $("#q2Button").click(function(){
    var jobSite = $("input:radio[name=jobSite]:checked").val();

    if (jobSite === "freelance"){
      html += 1;

      $("#question2").hide();
      $("#question3").show();
    } else if (jobSite === "company"){
      cSharp += 1;
      java += 1;
      php += 1;
      ruby += 1;

      $("#question2").hide();
      $("#question3").show();
    } else {
      $("#q2Error").text("Please select an answer.");
    }
  });
});
