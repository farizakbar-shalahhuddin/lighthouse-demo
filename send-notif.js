const dotenv = require('dotenv');

dotenv.config({ path: '.env' });
const lhciResult = require('./.lighthouseci/links.json');

// const url = process.env.URL_FEB_API;
// console.log(url);

const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN; // Your Auth Token from www.twilio.com/console

// const twilio = require('twilio');
const twilio = require('twilio');
const client = new twilio(accountSid, authToken);
// getting link from lhci result folder
let lhciLink = '';
 //eslint-disable-next-line
for (l in lhciResult) {
  //eslint-disable-next-line
  lhciLink = lhciResult[l];
}
client.messages
  .create({
    // eslint-disable-next-line
    body: `Github test fail, need to check ASAP. ${lhciLink}`,
    to: '+628567500965', // Text this number
    from: '+14159496556', // From a valid Twilio number
  })
  .then((message) => console.log(message));