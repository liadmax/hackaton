
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
  
  
  $( "#america" ).draggable();
  $( "#asia" ).draggable();
  $( "#africa" ).draggable();
  $( "#europa" ).draggable();
  $( "#mundo" ).droppable({
    drop: function() {
      alert( "dropped" );
    }
  });

  $('#bootstrapForm').submit(function (event) {
		event.preventDefault()
		var extraData = {}
		{
			/* Parsing input date id=1989254035 */
			var dateField = $("#1989254035_date").val()
			var timeField = $("#1989254035_time").val()
			let d = new Date(dateField)
			if (!isNaN(d.getTime())) {
				extraData["entry.1989254035_year"] = d.getFullYear()
				extraData["entry.1989254035_month"] = d.getMonth() + 1
				extraData["entry.1989254035_day"] = d.getUTCDate()
			}
			if (timeField && timeField.split(':').length >= 2) {
				let values = timeField.split(':')
				extraData["entry.1989254035_hour"] = values[0]
				extraData["entry.1989254035_minute"] = values[1]
			}
		}
		{
			/* Parsing input date id=1403025287 */
			var dateField = $("#1403025287_date").val()
			var timeField = $("#1403025287_time").val()
			let d = new Date(dateField)
			if (!isNaN(d.getTime())) {
				extraData["entry.1403025287_year"] = d.getFullYear()
				extraData["entry.1403025287_month"] = d.getMonth() + 1
				extraData["entry.1403025287_day"] = d.getUTCDate()
			}
			if (timeField && timeField.split(':').length >= 2) {
				let values = timeField.split(':')
				extraData["entry.1403025287_hour"] = values[0]
				extraData["entry.1403025287_minute"] = values[1]
			}
		}
		$('#bootstrapForm').ajaxSubmit({
			data: extraData,
        dataType: 'jsonp',  // This won't really work. It's just to use a GET instead of a POST to allow cookies from different domain.
        error: function () {
            // Submit of form should be successful but JSONP callback will fail because Google Forms
            // does not support it, so this is handled as a failure.
            alert('Form Submitted. Thanks.')
            // You can also redirect the user to a custom thank-you page:
            // window.location = 'http://www.mydomain.com/thankyoupage.html'
        }
    })
	})


  