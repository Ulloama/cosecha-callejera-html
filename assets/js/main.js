$(document).ready(function(){
    $('.dropdown').on('show.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
      });
    
      // Add slideUp animation to Bootstrap dropdown when collapsing.
    $('.dropdown').on('hide.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });

      //function show
    $('#showFood1').click(function(){
          $('#food1').toggle("slow");
    });

    $('#showFood2').click(function(){
        $('#food2').toggle("slow");
    });

    $('#showFood3').click(function(){
    $('#food3').toggle("slow");
    });
    
    $('#showFood4').click(function(){
        $('#food4').toggle("slow");
    });

    $('#showFood5').click(function(){
        $('#food5').toggle("slow");
    });

    $('#showFood6').click(function(){
        $('#food6').toggle("slow");
    });


    /*$("#showFood").click(function(event) {
        var foodId = event.target.id;
        console.log(foodId);
        $(`${event.target.id}`).toggle();
    });*/
    
});