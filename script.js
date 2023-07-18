$(document).ready(function(){
  var retryCount = 0;
  var maxRetries = 3;

  function fetchData() {
    $.ajax({
      url: "https://api.github.com/",
      type: "GET",
      success: function(){
        $(".container").addClass("success");
        $("#status").html("The GitHub API is working");
      },
      error: function(){
        if (retryCount < maxRetries) {
          retryCount++;
          $("#status").html("Connection error. Retrying... (" + retryCount + "/" + maxRetries + ")");
          setTimeout(fetchData, 3000); // Retry after 3 seconds
        } else {
          $(".container").addClass("error");
          $("#status").html("The GitHub API is not working");
        }
      }
    });
  }

  fetchData();
});
