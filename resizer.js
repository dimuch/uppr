const sharp = require('sharp');
const fs = require('fs');

const sourceImagesDirectory = './public/assets/images/blog-articles';
const destinationImagesDirectory = 'responsive';
const imagesSizes = [320, 394, 420, 640, 750, 828, 1080, 1200, 1920];

fs.readdirSync(sourceImagesDirectory).forEach(file => {
    const resultPromised = imagesSizes.map(async(imageSize) => {
        const destinationFolder = `${sourceImagesDirectory}/${destinationImagesDirectory}/${imageSize}`;
        try {
            if (!fs.existsSync(destinationFolder)) {
                fs.mkdirSync(destinationFolder);
            }
        } catch (e) {
            console.log(111, e);
        }

        const fileMetaData = await sharp(`${sourceImagesDirectory}/${file}`).metadata();
        const imageHeightPerWidth = Math.round(imageSize * fileMetaData.height / fileMetaData.width);

        return sharp(`${sourceImagesDirectory}/${file}`)
            .resize(imageSize, imageHeightPerWidth) // width, height
            .webp({})
            .toFile(`${destinationFolder}/${file.replace('.jpg', '.webp')}`);
    })

    const result = Array.from(Promise.allSettled(resultPromised)).map(item => item.value);
    console.log(result);
});
