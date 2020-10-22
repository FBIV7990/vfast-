const Cryptr = require("cryptr");
const cryptr = new Cryptr("ebonzvfastsecretkey");

export const storageService = { setData, getData, removeData };

function encrypt(data) {
  const stringData = JSON.stringify(data);
  // const encryptedString = cryptr.encrypt(stringData);
  const encryptedString = stringData;
  return encryptedString;
}

function decrypt(data) {
  if (data) {
    // const decryptedString = cryptr.decrypt(data);
    // const stringData=JSON.parse(decryptedString);
    const stringData = JSON.parse(data);
    return stringData;
  }
}

function setData(key, data) {
  const stringData = encrypt(data);
  localStorage.setItem(key, stringData);
}

function getData(key) {
  const data = localStorage.getItem(key);

  const stringData = decrypt(data);
  return stringData;
}
function removeData(key) {
  console.log(key);
  localStorage.removeItem(key);
}
