
function myFunction() {
   document.getElementById("myDropdown").classList.toggle("show");
 }
 
 function filterFunction() {
   var input, filter, ul, li, a, i;
   input = document.getElementById("myInput");
   filter = input.value.toUpperCase();
   div = document.getElementById("myDropdown");
   a = div.getElementsByTagName("a");
   for (i = 0; i < a.length; i++) {
     txtValue = a[i].textContent || a[i].innerText;
     if (txtValue.toUpperCase().indexOf(filter) > -1) {
       a[i].style.display = "";
     } else {
       a[i].style.display = "none";
     }
   }
 
 }

  $(function() {
    $( "#italy" ).draggable();
    $("#droppable-8").droppable({
       drop: function (event, ui) {
          $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
          .html( document.location = "italy.html" );
       },      
    });
 });
  
 $(function() {
  $( "#iran" ).draggable();
  $("#droppable-8").droppable({
     drop: function (event, ui) {
        $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
        .html( document.location = "iran.html" );
     },      
  });
});

$(function() {
  $( "#lebanon" ).draggable();
  $("#droppable-8").droppable({
     drop: function (event, ui) {
        $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
        .html( document.location = "lebanon.html" );
     },      
  });
});

$(function() {
  $( "#malta" ).draggable();
  $("#droppable-8").droppable({
     drop: function (event, ui) {
        $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
        .html( document.location = "malta.html" );
     },      
  });
});

$(function() {
  $( "#guatemala" ).draggable();
  $("#droppable-8").droppable({
     drop: function (event, ui) {
        $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
        .html( document.location = "guatamala.html" );
     },      
  });
});

$(function() {
  $( "#greece" ).draggable();
  $("#droppable-8").droppable({
     drop: function (event, ui) {
        $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
        .html( document.location = "greece.html" );
     },      
  });
});

$(function() {
  $( "#argentina" ).draggable();
  $("#droppable-8").droppable({
     drop: function (event, ui) {
        $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
        .html( document.location = "argentina.html" );
     },      
  });
});

$(function() {
  $( "#france" ).draggable();
  $("#droppable-8").droppable({
     drop: function (event, ui) {
        $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
        .html( document.location = "france.html" );
     },      
  });
});

  
  



