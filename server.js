var express = require('express');
var jade = require('jade');
var app = express();
var path = require('path');
var viewPath = path.join(__dirname, 'app/views');


app.locals.pretty = true;
app.set('port', (process.env.PORT || 8080));

app.get('/', function (req, res) {
  res.render('index', { title: 'Timestamp microservice', mainHeader: 'API Basejump: Timestamp microservice' });
});

app.get('/:date', function (req, res) {
  var dateParam = req.params.date;
  var dateObj = getDateObj(dateParam);
  var timestamp = getTimestampObj(dateObj);
  res.json(timestamp);
});

function getDateObj(dateParam)
{
  if (!isNaN(dateParam)) {
    console.log("this is a number value")
    var date = new Date(dateParam * 1000);
  }
  else
  {
    console.log("this is a text value")
    var unixdate = Date.parse(dateParam);
    var date = new Date(unixdate)
  }
  return date;
}

function getTimestampObj(date) {
  var timestamp = { unix: null, natural: null };
  if (date.getTime() > 0)
  {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    timestamp.unix = date.getTime() / 1000;
    timestamp.natural = monthNames[monthIndex] + ' ' + day + ', ' + year;
  }
  return timestamp;
}

app.set('view engine', 'jade');
app.set('views', viewPath);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
