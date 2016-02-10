$(document).ready(function() {

$( ".join" ).hover(
  function() {
    $( this ).addClass( "animated swing" );
  }, function() {
    $( this ).removeClass( "animated swing" );
  }
);

// $( "#center" ).hover(
//   function() {
//     $( ".unicorn-head" ).addClass( "animated pulse" );
//   }, function() {
//     $( ".unicorn-head" ).removeClass( "animated pulse" );
//   }
// );

// $( ".meetup-block" ).hover(
//   function() {
//     // $( ".badge").addClass( "animated bounceIn" );
//   }, function() {
//     // $( ".badge" ).removeClass( "animated bounceIn" );
//   }
// );

});
