//Generates a list of suburbs from a given .csv file
//TODO: Sort this by region so that there's not lots of suburbs on screen and give each suburb an individual ID (maybe from TradeMe?)
function getSuburbs(){
  //Parse the data file using Papa Parse
  var csvfile = "assets/Auckland.csv";
  $.get(csvfile, function (data) {
    var csvdata = Papa.parse(data);
    var suburb;
    for (var i = 1; i < csvdata.data.length; i++) {
      //Grab the suburb name and add that to the suburb selector menu
      suburb = csvdata.data[i][0];
      $("#suburb-selector").append( "<li><a href=\"#\">"+ suburb +"</a></li>");
    }
  });
}

