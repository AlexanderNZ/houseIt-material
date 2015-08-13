//parse the data file
var csvfile = "assets/Auckland.csv";

$.get(csvfile, function (data) {
  var csvdata = Papa.parse(data);
  console.log(csvdata);
});
