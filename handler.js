'use strict';

const twit = require('twit');
const moment = require('moment')

require('dotenv').config();


const config = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
}
/*
const Twitter = new twit(config);


Twitter.post('/statuses/update', { status: moment("12/09/2022", "DD-MM-YYYY").diff(moment(process.env.THE_DATE, "DD-MM-YYYY")) }, function(err, data, response) {
  if (err) {
    console.log(`Tweet was not posted. Errorcode: ${err}`)
  } else {
    console.log('Tweet posted.')
  }
})
*/

const currentDate = moment();
const nextDate = moment(process.env.THE_DATE, "DD-MM-YYYY HH:mm");

const daysLeft = nextDate.diff(currentDate, 'days');

if (daysLeft > 1) {
  console.log(`te vejo em ${daysLeft} dias`)
}

else if (daysLeft === 1) {
  console.log('te vejo amanhã')
}