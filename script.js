
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

  var data = {"total":0,"rows":[]};
  var totalCost = 0;
  
  
  $( "#draggable1" ).draggable();
  $( "#draggable2" ).draggable();
  $( "#draggable3" ).draggable();
  $( "#draggable4" ).draggable();
  $( "#droppable" ).droppable({
    drop: function() {
      alert( "dropped" );
    }
  });