const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Search the images of a given folder
exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const res = await cloudinary.search
    .expression(body.expression.expression)
    .execute()
    .then((result) => result);
  return {
    statusCode: 200,
    body: JSON.stringify(res),
  };
};
