var express = require('express');
var router = express.Router();
require('dotenv').config()

var sg = require('sendgrid')(process.env.SENDGRID_KEY);


router.post('/email', (req, res) => {
    let email = req.body.email;
    console.log(email)
    let base64Email = Buffer.from(email).toString('base64');
       

    var request = sg.emptyRequest()
      request.body = [
        {
          "email": email,
        },
          
      ];
      request.method = 'POST'
      request.path = '/v3/contactdb/recipients'
      sg.API(request, function (error, response) {
           // console.log(response.statusCode)
           // console.log(response.body)
           // console.log(response.headers)
       console.log(JSON.stringify(response.body))
        var request2 = sg.emptyRequest()
        request2.method = 'POST'
        request2.path = '/v3/contactdb/lists/1822207/recipients/' + base64Email;
        sg.API(request2, function (error2, response2) {
                //console.log(response2.statusCode)
                //console.log(response2.body)
                //console.log(response2.headers)
               //console.log('Recipent Added to PromoList')
               console.log(JSON.stringify(response2.body))
          if (error2) {
            console.log(error2)
          }
      })
  })

 res.end()

})

  
    

    

module.exports = router;
