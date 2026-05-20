function maskEmail(email) {
  let x = email.indexOf("@");
  let masked = email[0] + '*'.repeat(x - 2) + email[x-1] + email.slice(x);
  return masked;
}

let email = "apple.pie@example.com";
console.log(maskEmail(email));
email = "freecodecamp@example.com";
console.log(maskEmail(email));
email = "info@test.dev";
console.log(maskEmail(email));
email = "user@domain.org";
console.log(maskEmail(email));