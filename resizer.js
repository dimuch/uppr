const sharp = require('sharp');
const fs = require('fs');

const sourceImagesDirectory = './public/assets/images/blog-articles';
const destinationImagesDirectory = 'responsive';
const imagesSizes = [320, 420, 640, 750, 828, 1080, 1200, 1920];
const proportionScale = 4 / 7;

fs.readdirSync(sourceImagesDirectory).forEach(file => {
    const resultPromised = imagesSizes.map((imageSize) => {
        const imageHeightPerWidth = Math.round(imageSize * proportionScale);
        const destinationFolder = `${sourceImagesDirectory}/${destinationImagesDirectory}/${imageSize}`;
        try {
            if (!fs.existsSync(destinationFolder)) {
                fs.mkdirSync(destinationFolder);
            }
        } catch (e) {
            console.log(111, e);
        }

        return sharp(`${sourceImagesDirectory}/${file}`)
            .resize(imageSize, imageHeightPerWidth) // width, height
            .webp({})
            .toFile(`${destinationFolder}/${file.replace('.jpg', '.webp')}`);
    })

    const result = Array.from(Promise.allSettled(resultPromised)).map(item => item.value);
    console.log(result);
});
