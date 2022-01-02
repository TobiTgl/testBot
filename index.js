const express = require('express')
const app = express()
const port = 3000
const axios = require('axios');
var base64 = require('base-64');
  
app.get('/', (req, res) => {
  res.send('Hello World!')
})

var von = "testvon"

var bis = "testbis"

var termin = {"termin": {"bis": von,"von": bis,"maximal": 4,"bereitsgebucht": 0,"buchbareZeitID": 5557,"gruppenID": 137,"guid": "","nochfrei": 0,"resourceID": 235,"terminArtID": 155},"terminPatient": {"ausweisnummer": null,"befundTransmitMethods": ["email","sms"],"eMail": "tobias_813@t-online.de","geburtstag": 859676400,"geschlecht": "M","handyNr": "015172662243","hausnr": "10","id": 0,"name": "Tgel","ort": "Illerrieden","plz": "89186","strasse": "Bischof-Ketteler Str","vorname": "Tobias"}}

var myString = JSON.stringify(termin)

var encodedData = base64.encode(myString);

console.log(encodedData)

app.post('/covTest', (req, res) => {
    res.send('Hello World!')
  })

var CronJob = require('cron').CronJob;

var job = new CronJob('* * * * *', function(){

    var data = 'eyJ0ZXJtaW4iOiB7ImJpcyI6IDE2MzkzOTU5MDAsInZvbiI6IDE2MzkzOTU2MDAsIm1heGltYWwiOiA0LCJiZXJlaXRzZ2VidWNodCI6IDAsImJ1Y2hiYXJlWmVpdElEIjogNTU1NywiZ3J1cHBlbklEIjogMTM3LCJndWlkIjogIiIsIm5vY2hmcmVpIjogMCwicmVzb3VyY2VJRCI6IDIzNSwidGVybWluQXJ0SUQiOiAxNTV9LCJ0ZXJtaW5QYXRpZW50IjogeyJhdXN3ZWlzbnVtbWVyIjogbnVsbCwiYmVmdW5kVHJhbnNtaXRNZXRob2RzIjogWyJlbWFpbCIsInNtcyJdLCJlTWFpbCI6ICJ0b2JpYXNfODEzQHQtb25saW5lLmRlIiwiZ2VidXJ0c3RhZyI6IDg1OTY3NjQwMCwiZ2VzY2hsZWNodCI6ICJNIiwiaGFuZHlOciI6ICIwMTUxNzI2NjIyNDMiLCJoYXVzbnIiOiAiMTAiLCJpZCI6IDAsIm5hbWUiOiAiVGdlbCIsIm9ydCI6ICJJbGxlcnJpZWRlbiIsInBseiI6ICI4OTE4NiIsInN0cmFzc2UiOiAiQmlzY2hvZi1LZXR0ZWxlciBTdHIiLCJ2b3JuYW1lIjogIlRvYmlhcyJ9fQ';

    var von = "testvon"

    var bis = "testbis"

    var termin = {"termin": {"bis": von,"von": bis,"maximal": 4,"bereitsgebucht": 0,"buchbareZeitID": 5557,"gruppenID": 137,"guid": "","nochfrei": 0,"resourceID": 235,"terminArtID": 155},"terminPatient": {"ausweisnummer": null,"befundTransmitMethods": ["email","sms"],"eMail": "tobias_813@t-online.de","geburtstag": 859676400,"geschlecht": "M","handyNr": "015172662243","hausnr": "10","id": 0,"name": "Tgel","ort": "Illerrieden","plz": "89186","strasse": "Bischof-Ketteler Str","vorname": "Tobias"}}

console.log(termin.termin)

    var encodedData = base64.encode(termin);

    console.log(JSON.stringify(encodedData))


    var config = {
        method: 'post',
        url: 'https://httpbin.org/post',
        headers: { 
        'Content-Type': 'text/plain'
        },
        data : data
    };

    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });

} , null, true, 'America/Los_Angeles');
job.start();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})