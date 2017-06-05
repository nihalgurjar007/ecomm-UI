(function($) {
		$(function() {

$('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      hover: true, 
      belowOrigin: true, 
      alignment: 'right' 
    }
  );

 $('.modal').modal({
      dismissible: true, 
      opacity: .5, 
      inDuration: 300, 
      outDuration: 200, 
      startingTop: '4%', 
      endingTop: '10%', 
     
     complete: function() { alert('Closed'); } 
    }
  );
 $(document).ready(function(){
      $('.slider').slider();
    });
        

		}); 
})(jQuery); 

 
