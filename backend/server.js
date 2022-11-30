var request = require("request");

const _apiUrl = "https://faceapi.mxface.ai/api/v2/face/verify";
const _subscriptionKey = "XYiyrB4lAxfLx8F4o8-nAjyNS0wKw1148"; //change subscription key

var fs = require("fs");
function base64Encode(file) {
  var body = fs.readFileSync(file);
  return body.toString("base64");
}

// console.log("hello world");
var face_1 = base64Encode(
  "../backend/uploads/1669706652422-20210402_195757.jpg"
);
var face_2 = base64Encode(
  "../backend/uploads/1669706652422-20210402_195757.jpg"
);

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
