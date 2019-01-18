$(function(){
  var html = 0;
  var cSharp = 0;
  var java = 0;
  var php = 0;
  var ruby = 0;
  var nameInput;

  $("#startButton").click(function(){
    nameInput = $("#userName").val();

    if (nameInput === ""){
      $("#nameError").text("Please enter your name.");
    } else{
      $("#question1").fadeIn();
      $(".firstPage").hide();
    }
  });

  $("#q1Button").click(function(){
    var whichEnd = $("input:radio[name=whichEnd]:checked").val();

    if (whichEnd === "visual"){
      html += 2;

      $("#question1").hide();
      $("#question2").fadeIn();
    } else if (whichEnd === "functionality"){
      cSharp += 1;
      java += 1;
      php += 1;
      ruby += 1;

      $("#question1").hide();
      $("#question2").fadeIn();
    } else {
      $("#q1Error").text("Please select an answer.");
    }
  });

  $("#q2Button").click(function(){
    var jobSite = $("input:radio[name=jobSite]:checked").val();

    if (jobSite === "freelance"){
      html += 1;

      $("#question2").hide();
      $("#question3").fadeIn();
    } else if (jobSite === "company"){
      $("#question2").hide();
      $("#question3").fadeIn();
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
      $("#question4").fadeIn();
    } else if (companySize === "small"){
      php += 1;
      ruby += 1;

      $("#question3").hide();
      $("#question4").fadeIn();
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
      $("#question5").fadeIn();
    } else if (webApp === "apps"){
      java += 1;
      ruby += 1;

      $("#question4").hide();
      $("#question5").fadeIn();
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
      $(".nameInsert").text(nameInput);
      $("#question5").hide();
      $("#htmlResult").fadeIn();
    } else if (java >= 4){
      $(".nameInsert").text(nameInput);
      $("#question5").hide();
      $("#javaResult").fadeIn();
    } else if (php >= 4){
      $(".nameInsert").text(nameInput);
      $("#question5").hide();
      $("#phpResult").fadeIn();
    }  else if (cSharp >= 4){
      $(".nameInsert").text(nameInput);
      $("#question5").hide();
      $("#cSharpResult").fadeIn();
    } else if (ruby >= 4){
      $(".nameInsert").text(nameInput);
      $("#question5").hide();
      $("#rubyResult").fadeIn();
    } else if (java >= 3){
      $(".nameInsert").text(nameInput);
      $("#question5").hide();
      $("#javaResult").fadeIn();
    } else if (php >= 3){
      $(".nameInsert").text(nameInput);
      $("#question5").hide();
      $("#phpResult").fadeIn();
    }  else if (cSharp >= 3){
      $(".nameInsert").text(nameInput);
      $("#question5").hide();
      $("#cSharpResult").fadeIn();
    } else if (ruby >= 3){
      $(".nameInsert").text(nameInput);
      $("#question5").hide();
      $("#rubyResult").fadeIn();
    }
  });
});
