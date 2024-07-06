const sharp = require('sharp');
const fs = require('fs');
const { sizes: imagesSizes } = require('./imageSizes');

const destinationImagesDirectory = 'responsive';

const resizeImage = async (file, imageSize, sourceDirectory) => {
  const destinationFolder = `${sourceDirectory}/${destinationImagesDirectory}/${imageSize}`;
  try {
    if (!fs.existsSync(destinationFolder)) {
      fs.mkdirSync(destinationFolder);
    }
  } catch (e) {
    console.log(111, e);
  }

  const fileMetaData = await sharp(`${sourceDirectory}/${file}`).metadata();
  const imageHeightPerWidth = Math.round((imageSize * fileMetaData.height) / fileMetaData.width);

  return sharp(`${sourceDirectory}/${file}`)
    .resize(imageSize, imageHeightPerWidth) // width, height
    .webp({})
    .toFile(`${destinationFolder}/${file.replace(/jpg|png|jpeg/, 'webp')}`)
    .then(() => console.log(`${file} ==> ok`))
    .catch(() => console.log(`${file} ==> error`));
};

const blogResizing = () => {
  const sourceDirectory = './public/assets/images/blog-articles';
  fs.readdirSync(sourceDirectory).forEach(file => {
    const resultPromised = imagesSizes.map(async imageSize => await resizeImage(file, imageSize, sourceDirectory));
    return Promise.allSettled(resultPromised);
  });
};

const othersImagesResizing = () => {
  const sourceDirectory = './public/assets/images/others';
  fs.readdirSync(sourceDirectory).forEach(file => {
    const resultPromised = imagesSizes.map(async imageSize => await resizeImage(file, imageSize, sourceDirectory));
    return Promise.allSettled(resultPromised);
  });
};

const downloadsImagesResizing = () => {
  const sourceDirectory = './public/assets/images/downloads';
  fs.readdirSync(sourceDirectory).forEach(file => {
    const resultPromised = imagesSizes.map(async imageSize => await resizeImage(file, imageSize, sourceDirectory));
    return Promise.allSettled(resultPromised);
  });
};

blogResizing();
othersImagesResizing();
downloadsImagesResizing();
