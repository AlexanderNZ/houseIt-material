//Generates a list of suburbs from a given .csv file
//TODO: Sort this by region so that there's not lots of suburbs on screen and give each suburb an individual ID (maybe from TradeMe?)
function getSuburbs(){
  //parse the data file
  var csvfile = "assets/Auckland.csv";
  $.get(csvfile, function (data) {
    var csvdata = Papa.parse(data);
    var listedSuburbs = "";
    for (var i = 1; i < csvdata.data.length; i++) {
      listedSuburbs += "<li><a href=\"#\">"+ csvdata.data[i][0] +"</a></li>";
    }
    $("#suburb-selector").append(listedSuburbs);
  });
}

