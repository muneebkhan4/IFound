var request = require("request");

const _apiUrl = "https://faceapi.mxface.ai/api/v2/face/verify";
const _subscriptionKey = "lHiBQftcNivnqPKPu3-r7VmZVadBu1083"; //change subscription key

var fs = require("fs");
function base64Encode(file) {
  var body = fs.readFileSync(file);
  return body.toString("base64");
}

// console.log("hello world");
var face_1 = base64Encode("test-img-3.jpg");
var face_2 = base64Encode("test-img-4.jpg");

var optionsFaceCompare = {
  url: _apiUrl,
  method: "POST",
  headers: {
    subscriptionkey: _subscriptionKey,
    "Content-Type": "application/json",
  },
  json: {
    encoded_image1: face_1,
    encoded_image2: face_2,
  },
  rejectUnauthorized: false,
};

request(optionsFaceCompare, function (error, response) {
  console.log("Response /verify");
  if (error) {
    console.log(error);
  } else {
    console.log(response.body);
  }
});
