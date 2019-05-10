const bcrypt = require("bcryptjs");

async function hashPassword(plaintext) {
  const user = {
    name: "Imran",
    email: "comunit@live.com",
    password: plaintext
  };

  const salt = await bcrypt.genSalt(10);

  user.password = await bcrypt.hash(plaintext, salt);
  console.log(user);
}

async function comparePasswords(plaintext, hash) {
  const isMatch = await bcrypt.compare(plaintext, hash);
  if (isMatch) {
    console.log("match");
  } else {
    console.log("not match");
  }
}

// hashPassword("123123");
comparePasswords(
  "123123",
  "$2a$10$XrESo8gihnhn.rFmooZac.0cE.f4fPCkBjs7P9m5IqGzqxaJG9Rwa"
);
