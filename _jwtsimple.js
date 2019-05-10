const jwt = require("jwt-simple");
const config = require("config");

function getToken() {
  const payload = { id: 1, name: "Imran" };
  const token = jwt.encode(payload, config.get("jwtSecret"));
  return { token };
}

function validateToken(token) {
  const decode = jwt.decode(token, config.get("jwtSecret"));
  return decode;
}

// console.log(getToken());
console.log(
  validateToken(
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkltcmFuIn0.UunsB4ceSCZ67v2ekH2PQSsUsqG5LOCV49h_8cua5hg"
  )
);
