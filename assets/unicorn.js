$(document).ready(function() {

$( ".join" ).hover(
  function() {
    $( this ).addClass( "animated swing" );
  }, function() {
    $( this ).removeClass( "animated swing" );
  }
);

$( ".eventblock" ).hover(
  function() {
    $( this ).addClass( "animated swing" );
  }, function() {
    $( this ).removeClass( "animated swing" );
  }
);

$('.read-more').click(function() {
  // alert("hi");
  $(this).parent().find('.post-content').addClass('post-content-full');
  event.preventDefault();
});

});
