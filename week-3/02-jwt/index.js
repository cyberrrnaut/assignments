const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const z = require("zod"); //input validation using zod library

const emailSchema = z.string().email();
const pwdSchema = z.string().min(6); // min 6 length

//generate a jwt token on top of password only and return the jwt token

function signJwt(username, password) {
  const usernameValidation = emailSchema.safeParse(username);
  const pwdValidation = pwdSchema.safeParse(password);

  if (!usernameValidation.success || !pwdValidation.success) {
    return null;
  }

  const jwtToken = jwt.sign({ username }, jwtPassword);
  return jwtToken;
}

// Verifies a JWT using a secret key.

function verifyJwt(token) {
  try {
    const response = jwt.verify(token, jwtPassword);
    return response;
  } catch (err) {
   
    return null;
  }
}

// Decodes a JWT to reveal its payload without verifying its authenticity.

function decodeJwt(token) {
  try {
    const response = jwt.decode(token);
    return response;
  } catch (err) {
   
    return null;
  }
}


const jwtToken = signJwt("bubu@gmail.com","123456");

const decoded= decodeJwt(jwtToken);

const verified= verifyJwt(jwtToken);

console.log(jwtToken);

if(jwtToken!==null){
    console.log(decoded);
    console.log(verified);
}

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
