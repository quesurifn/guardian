var express = require('express');
var router = express.Router();
var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
var r = require('request')


router.post('/email', (req, res) => {
  let email = req.body.email
  if (req.body.list === 'newsletter') {

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
            console.log(response.body)
              var request2 = sg.emptyRequest()
              request2.method = 'POST'
              request2.path = '/v3/contactdb/lists/1822202/recipients/' + base64Email;
              sg.API(request2, function (error2, response2) {
                console.log(response2.body)
                //console.log(response2.statusCode)
                //console.log(response2.body)
                //console.log(response2.headers)
               //console.log('Recipent Added to PromoList')
                if (error2) {
                  console.log(error2)
                }
              })
          })
          res.end()



    } else {
         
      
      
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

              var request2 = sg.emptyRequest()
              request2.method = 'POST'
              request2.path = '/v3/contactdb/lists/1822207/recipients/' + base64Email;
              sg.API(request2, function (error2, response2) {
                //console.log(response2.statusCode)
                //console.log(response2.body)
                //console.log(response2.headers)
               //console.log('Recipent Added to PromoList')
                if (error2) {
                  console.log(error2)
                }
              })
          })
          res.end()
    }
})


router.post('/addtocart', (req, res) => {
  let url = 'https://www.nexternal.com/shared/xml/ordercreate.rest'
  let data = 
  `<?xml version="1.0" encoding="utf-8"?>
    <OrderCreateRequest>
      <Credentials>
        <AccountName>fairway</AccountName>
        <UserName>xmlbob</UserName>
        <Password>XMLDem0Pwd</Password>
      </Credentials>
      <OrderCreate Mode="Add">
        <Customer MatchingField="Email">
          <Email DefaultTo="Most Recently Created">demo@demo.com</Email>
        </Customer>
        <Payment>
          <PaymentMethod>CreditCard</PaymentMethod>
          <CreditCard>
            <CreditCardType>Visa</CreditCardType>
            <CreditCardNumber>4111111111111111</CreditCardNumber>
            <CreditCardExpDate>08/2018</CreditCardExpDate>
          </CreditCard>
        </Payment>
        <ShipTos>
          <ShipTo Label="yourself">
            <Products>
              <Product>
                <ProductName>Caddyshack DVD</ProductName>
                <Qty>1</Qty>
              </Product>
            </Products>
          </ShipTo>
        </ShipTos>
      </OrderCreate>
    </OrderCreateRequest>`

  let options = {
    url: url,
    body: data,
    headers: {'Content-Type':'text/xml'}
  }

  r.post(options, (err, req, body) => {
    if(err) {
      console.log(err)
      res.send({"status":"400", "msg": err})
    } else {
      console.log(body)
      res.send({"status": "200", "msg": "OK"})
    }
  })
})


module.exports = router;
