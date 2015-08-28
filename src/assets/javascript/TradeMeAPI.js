$(function () {
  initialize();

  $("#suburb-selector a").click(function (e) {
    var suburb = e.target.innerHTML;

    //TO DO: Get this automatically (feed suburb search into TradeMe and get back suburb ID OR Hashtable)
    if (suburb == "Newmarket") {
      get_properties(99);
    } else if (suburb == "Ponsonby") {
      get_properties(83);
    }

    $('#content').show();
  });
});

function get_properties(suburb_id) {
  updateSuburbInFor(suburb_id);
  var consumer_key = 'C424FED29227D362E02BA38FFAF22121';
  var consumer_secret = 'C90B7D221696E32BC0F0E2E3B868A437&26';

  var query_string = "suburb=" + suburb_id;

  var url = 'https://api.trademe.co.nz/v1/Search/Property/Residential.json?' +
    'oauth_consumer_key=' + consumer_key +
    '&oauth_signature_method=PLAINTEXT&oauth_signature=' + consumer_secret +
    '&' + query_string;

  $.ajax({
    url: url
  }).done(function (data) {
    console.log(data);

    locateHouses(data);
  });
};
