var express = require('express');

var router = express.Router();
require('dotenv').config()

var Product = require('../db/Product')


var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
var r = require('request')

var mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL, { useMongoClient: true });


mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${process.env.DB_URL}`)
})

mongoose.connection.on('error', (err) => {
  console.log(`Mongoose has an error: ${err}`)
})

mongoose.connection.on('disconnected', () => {
  console.log(`Mongoose has disconnected from ${process.env.DB_URL}`)
})

process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
}); 


var url = process.env.DB_URL;


router.get('/products', (req, res) => {
  Product.find({}, function (err, product) {
    res.send(product);
  })
})


/*router.get('/products', (req, res) => {
  let url = 'https://www.nexternal.com/shared/xml/productquery.rest'
  let data = 
    `<?xml version="1.0" encoding="utf-8"?>
  <ProductQueryRequest>
    <Credentials>
      <AccountName>elexa</AccountName>
      <Key>${process.env.NEXTERNAL}</Key>
    </Credentials>
    <ProductCreatedRange>
      <ProductCreatedDateStart>
        <DateTime>
          <Date>10/06/2017</Date>
        </DateTime>
      </ProductCreatedDateStart>
      <ProductCreatedDateEnd>
        <DateTime>
          <Date>${new Date().toLocaleDateString()}</Date>
        </DateTime>
      </ProductCreatedDateEnd>
    </ProductCreatedRange>
    <CurrentStatus />
  </ProductQueryRequest>`

r.post(options, (err, req, body) => {
    if(err) {
      console.log(err)
      res.send({"status":"400", "msg": err})
    } else {
      console.log(body)
      res.send({"status": "200", "msg": "OK", "body": body})
    }
  })  
})*/

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
/*

  Product Schema

  <Product>
    <ProductName>Caddyshack DVD</ProductName>
    <Qty>1</Qty>
  </Product>

*/


  let url = 'https://www.nexternal.com/shared/xml/ordercreate.rest'
  let data = 
  `<?xml version="1.0" encoding="utf-8"?>
    <OrderCreateRequest>
      <Credentials>
        <AccountName>guardian</AccountName>
        <Key>${process.env.NEXTERNAL}</Key>
      </Credentials>
      <OrderCreate Mode="Add">
        <Customer MatchingField="Email">
          <Email DefaultTo="Most Recently Created">${req.body.email}</Email>
        </Customer>
        <Payment>
          <PaymentMethod>CreditCard</PaymentMethod>
          <CreditCard>
            <CreditCardType>${req.body.cctype}</CreditCardType>
            <CreditCardNumber>${req.body.ccnumber}</CreditCardNumber>
            <CreditCardExpDate>${req.body.ccexp}</CreditCardExpDate>
          </CreditCard>
        </Payment>
        <ShipTos>
          <ShipTo Label="yourself">
            <Products>
              
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



router.post('/reply', (req, res) => {
  console.log(req)
  if (req.body.Status === 'Success') {
    res.redirect(301, 'http://getguardian.com/checkout')
  } else { 
    res.cookie('error', req.body.FailureReason)
    res.redirect(301, 'http://getguardian.com/error')
  }
})


router.post('/products', (req, res) => {
  var product = new Product({
    name: req.body.name,
    price: req.body.price,
    desc: req.body.desc,
    images: req.body.images,
    comingSoon: req.body.comingSoon,
    link: req.body.link
  })

  product.save(function (err, product) {
    if (err) return res.send(400, {status: err});
    res.send(200, {status: product})
  })

})


module.exports = router;
