# Readme

## Dependency Versions Used
    
    ```
    "body-parser": "~1.16.0",
    "compression": "^1.6.2",
    "cookie-parser": "~1.4.3",
    "debug": "~2.6.0",
    "dotenv": "^4.0.0",
    "ejs": "~2.5.5",
    "express": "~4.14.1",
    "helmet": "^3.6.1",
    "json2csv": "^3.8.0",
    "marked": "0.3.6",
    "moment": "2.18.1",
    "morgan": "~1.7.0",
    "node-schedule": "^1.2.3",
    "nodemailer": "^4.0.1",
    "pg": "^6.4.0",
    "prismic.io": "3.4.1",
    "raven": "^2.1.0",
    "request": "2.81.0",
    "request-promise": "^4.2.1",
    "sendgrid": "^5.1.2",
    "serve-favicon": "~2.3.2",
    "shopify-api-node": "2.5.0",
    ```


    Express version 4 and Node version 8.1.3 are also used. Any Node version below 7.6.0 may break this server.

## Special Instructions
    
    PM2 is used as a 'forever'server restarting the server when it goes down. PM2 can also be used as a file watcher. 
    
    Command to install PM2 `npm i -s pm2` 

    Command to start PM2 `pm2 start --attach bin/www' 

    with watcher for development

    `pm2 start --attach bin/www --watch` 

## Regular Starting Instructions

    `npm start`


## Gotyas

Dotenv must be set up with the proper keys otherwise the server won't start.

The keys needed: 

```
SHOPIFY_API_KEY (alpha-num)
SHOPIFY_API_PASSWORD (alpha-num)
PROSPECT_AUT (alpha-num)
ZENDESK_AUTH (alpha-num)
SPREE_API_TOKEN (alpha-num)
USPS_API_USERNAME (alpha-num)
HEROKU_API_KEY (alpha-num)
KYLE_GMAIL (alpha-num)
KYLE_PASS (alpha-num)
SENDGRID_API_KEY (alpha-num)
SENDGRID_T_Prospect_F (bool)
DROPPEDCART=true (bool)
TESTINGMODE=false (bool)
```