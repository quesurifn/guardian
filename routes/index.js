const express = require('express');
const router = express.Router();
const request = require('request');
const moment = require('moment');
const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
const pg = require('pg');


const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/domeprod';


require('dotenv').config()

var mobileRegex = new RegExp("(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino", "i");

const Prismic = require('prismic.io'); //CMS


router.get('/', (req, res, next) => {
  next()
})

module.exports = router;