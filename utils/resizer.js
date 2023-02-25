const sharp = require('sharp');
const fs = require('fs');
const {sizes: imagesSizes} = require('./imageSizes');

const sourceImagesDirectory = './public/assets/images/blog-articles';
const destinationImagesDirectory = 'responsive';

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
            .toFile(`${destinationFolder}/${file.replace('.jpg', '.webp')}`)
            .then(() => console.log(`${file} ==> ok`))
            .catch(() => console.log(`${file} ==> error`))
    })

    return Promise.allSettled(resultPromised);
});
