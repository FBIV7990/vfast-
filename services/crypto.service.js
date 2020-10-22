
const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
//const key = crypto.randomBytes(32);
const key='45643645633463634564634563563667'

function encrypt(data) {
  const text=JSON.stringify(data)
 const iv = crypto.randomBytes(16);
 let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
 let encrypted = cipher.update(text);
 encrypted = Buffer.concat([encrypted, cipher.final()]);
 return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

function decrypt(text) {
 let iv = Buffer.from(text.iv, 'hex');
 let encryptedText = Buffer.from(text.encryptedData, 'hex');
 let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
 let decrypted = decipher.update(encryptedText);
 decrypted = Buffer.concat([decrypted, decipher.final()]);
 return JSON.parse(decrypted.toString());
}

// var hw = encrypt("Some serious stuff")
// console.log(hw)
// console.log(decrypt(hw))

module.exports={encrypt,decrypt}