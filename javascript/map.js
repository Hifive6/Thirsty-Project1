
  $.ajax({
    url: "http://beermapping.com/webservice/locimage/636b53943512870ac18caa14a2ba971e/",
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });