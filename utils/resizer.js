const fs = require('fs');
const sharp = require('sharp');
const { sizes: imagesSizes } = require('./imageSizes');

const sourceImagesDirectories = [
  './public/assets/images/blog-articles',
  './public/assets/images/others',
  './public/assets/images/downloads',
  './public/assets/images/case-study',
];

const destinationImagesDirectory = 'responsive';

const resizeImage = async (file, imageSize, sourceDirectory) => {
  const destinationFolder = `${sourceDirectory}/${destinationImagesDirectory}/${imageSize}`;
  try {
    if (!fs.existsSync(destinationFolder)) {
      fs.mkdirSync(destinationFolder);
    }
  } catch (e) {
    console.log('resizeImage ERROR ==>', e);
  }

  const fileMetaData = await sharp(`${sourceDirectory}/${file}`).metadata();

  if (fileMetaData.format === 'webp') {
    const source = `${sourceDirectory}/${file}`;
    const destination = `${destinationFolder}/${file}`;

    return new Promise((resolve) => {
      try {
        fs.copyFileSync(source, destination);
        console.log(`${file} ==> ok`);
        resolve(true);
      } catch (err) {
        console.log(`${file} ==> error`, err);
        resolve(false);
      }
    });
  }

  const imageHeightPerWidth = Math.round((imageSize * fileMetaData.height) / fileMetaData.width);
  return sharp(`${sourceDirectory}/${file}`)
    .resize(imageSize, imageHeightPerWidth) // width, height
    .webp()
    .toFile(`${destinationFolder}/${file.replace(/jpg|png|jpeg|webp/, 'webp')}`)
    .then(() => console.log(`${file} ==> ok`))
    .catch(() => console.log(`${file} ==> error`));
};

const imageResizing = () => {
  sourceImagesDirectories.forEach(sourceDirectory => {
    fs.readdirSync(sourceDirectory).forEach(file => {
      const resultPromised = imagesSizes.map(async imageSize => await resizeImage(file, imageSize, sourceDirectory));
      return Promise.allSettled(resultPromised);
    });
  });
};

module.exports = { resizeImage, imageResizing };

// Run batch resize only when script is executed directly (e.g. node resizer.js).
// When imported by API (e.g. article submit), only resizeImage() is called for
// the single uploaded file — do not rewrite/recreate other images.
if (require.main === module) {
  imageResizing();
}
