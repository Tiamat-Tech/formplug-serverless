const { encrypt } = require("../src/lib/encryption");
const config = require("../config.json");

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("Please provide an email address to encrypt as an argument");
  process.exit(0);
}

if (!config.ENCRYPTION_KEY) {
  console.error("Please set the ENCRYPTION_KEY config variable");
  process.exit(0);
}

args.forEach((plainTextEmail) => {
  try {
    console.log(encrypt(plainTextEmail, config.ENCRYPTION_KEY));
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
  }
});
