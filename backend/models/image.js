const mongoose = require("mongoose");
const Joi = require("joi");

const imageSchema = new mongoose.Schema({
  imgUrl: {
    type: String,
    required: true,
  },
  data: {
    type: Buffer, // casted to MongoDB's BSON type: binData
    //  required: true,
  },
});

const Image = mongoose.model("Image", imageSchema);

function validateImage(Image) {
  const schema = Joi.object({
    imgUrl: Joi.string().required(),
  });
  return schema.validate(Image);
}

exports.Image = Image;
exports.validate = validateImage;
