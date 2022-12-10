const mailchimp = require("@mailchimp/mailchimp_marketing");
mailchimp.setConfig({
  apiKey: "003259bd2c06247e85547f20d490364c-us11",
  server: "us11",
});
module.exports = mailchimp;
