$(document).ready(function(){

    $('#panel2, #panel3').hide();
    $("#panel1-btn").addClass('active');

    $('#panel1-btn').click(function(e){
      $("#panel1").fadeIn(0);
      $('#panel2, #panel3').hide();
      $("#panel1-btn").addClass('active');
      $("#panel2-btn, #panel2-btn").removeClass('active');
      e.preventDefault();
    });

    $('#panel2-btn').click(function(e){
      $("#panel2").fadeIn(0);
      $('#panel1, #panel3').hide();
      $("#panel2-btn").addClass('active');
      $("#panel1-btn, #panel3-btn").removeClass('active');
      e.preventDefault();
    });

    $('#panel3-btn').click(function(e){
      $("#panel3").fadeIn(0);
      $('#panel1, #panel2').hide();
      $("#panel3-btn").addClass('active');
      $("#panel1-btn, #panel2-btn").removeClass('active');
      e.preventDefault();
    });

    // $('#myModalbtn').click(function(e){
    //   alert("hello");
    //   e.preventDefault();
    // });

    $( "#myModalbtn" ).click();
    // e.preventDefault();

});

