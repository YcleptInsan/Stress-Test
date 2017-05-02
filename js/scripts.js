$(document).ready(function(){
  $("form#stress-test").submit(function(event){
    event.preventDefault();
    var signsArray = [];
    var symptomsArray = [];
    var copingArray = [];

    $("input:checkbox[name=signs]:checked").each(function(){
        var stressSigns = $(this).val();
          signsArray.push(stressSigns);
      });
        var signsCount = signsArray.length;

    $("input:checkbox[name=symptoms]:checked").each(function(){
      var stressSymptoms = $(this).val();
        symptomsArray.push(stressSymptoms);
    });
      var symptomsCount = symptomsArray.length;
      var stressLevel = parseInt(symptomsCount + signsCount);

    $("input:checkbox[name=coping]:checked").each(function(){
      var stressCoping = $(this).val();
        copingArray.push(stressCoping);
    });
    var copingCount = copingArray.length;
    var stressLevel = parseInt(symptomsCount + signsCount - copingCount);
    $(".responseAll").hide();

    if (signsArray.length > 1 || symptomsArray.length > 1 || copingArray.length > 1){

      if (stressLevel = 1) {
        $("#responses1").show();
      }
      else if (stressLevel <= 3) {
        $("#responses2").show();
      }
      else if (stressLevel <= 4) {
        $("#responses3").show();
      }
      else if (stressLevel <= 6) {
        $("#responses4").show();
      }
    }
    else{
      alert("Please completly fill out the form!");
      }
  });
});
