require("colors");
const config = require("./emailConfig.json");
const nodemailer = require("nodemailer");
const { error } = require("shelljs");

const args = process.argv.slice(2);
const REQUIRED_FIELDS_COUNT = 2;

if (args.length !== REQUIRED_FIELDS_COUNT) {
  console.log(
    "Two arguments required: subject and body.".red,
    'E.g. node send-email.js "Where\'s my tea?" "So yeah... where is it?"'.cyan
  );
  process.exit(0);
}

const [subject, body] = args;
const { HOST, PORT, FROM_EMAIL, TO_EMAIL } = config;
const { USERNAME, PASSWORD } = config.AUTH;

const transporter = nodemailer.createTransport({
  host: HOST,
  port: PORT,
  secure: true,
  auth: {
    user: USERNAME,
    pass: PASSWORD,
  },
});

const message = {
  from: FROM_EMAIL,
  to: TO_EMAIL,
  subject,
  body,
  html: `<p>${body}</p>`,
};

transporter.sendMail(message, (error, info) => {
  if (error) {
    console.error(`Error occurred: ${error.message}`);
    return process.exit(0);
  }

  return console.log("Message sent: %s", info.messageId);
});
