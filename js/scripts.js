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
      html += 2;

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
      $("#question2").hide();
      $("#question3").show();
    } else {
      $("#q2Error").text("Please select an answer.");
    }
  });

  $("#q3Button").click(function(){
    var companySize = $("input:radio[name=companySize]:checked").val();

    if (companySize === "big"){
      cSharp += 1;
      java += 1;

      $("#question3").hide();
      $("#question4").show();
    } else if (companySize === "small"){
      php += 1;
      ruby += 1;

      $("#question3").hide();
      $("#question4").show();
    } else {
      $("#q3Error").text("Please select an answer.");
    }
  });

  $("#q4Button").click(function(){
    var webApp = $("input:radio[name=webApp]:checked").val();

    if (webApp === "webpages"){
      cSharp += 1;
      php += 1;

      $("#question4").hide();
      $("#question5").show();
    } else if (webApp === "apps"){
      java += 1;
      ruby += 1;

      $("#question4").hide();
      $("#question5").show();
    } else {
      $("#q4Error").text("Please select an answer.");
    }
  });

  $("#q5Button").click(function(){
    var companySites = $("input:radio[name=companySites]:checked").val();

    if (companySites === "wiki"){
      php += 1;
    } else if (companySites === "bing"){
      cSharp += 1;
    } else if (companySites === "twitter"){
      ruby += 1;
    } else if (companySites === "youtube"){
      java += 1;
    } else {
      $("#q4Error").text("Please select an answer.");
    }

    if (html >= 2){
      $("#question5").hide();
      $("#htmlResult").show();
    } else if (java >= 4){
      $("#question5").hide();
      $("#javaResult").show();
    } else if (php >= 4){
      $("#question5").hide();
      $("#phpResult").show();
    }  else if (cSharp >= 4){
      $("#question5").hide();
      $("#cSharpResult").show();
    } else if (ruby >= 4){
      $("#question5").hide();
      $("#rubyResult").show();
    } else if (java >= 3){
      $("#question5").hide();
      $("#javaResult").show();
    } else if (php >= 3){
      $("#question5").hide();
      $("#phpResult").show();
    }  else if (cSharp >= 3){
      $("#question5").hide();
      $("#cSharpResult").show();
    } else if (ruby >= 3){
      $("#question5").hide();
      $("#rubyResult").show();
    }
  });
});
