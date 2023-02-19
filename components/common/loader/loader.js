const sizes = [320, 420, 640, 750, 828, 1080, 1200, 1920];

export default function loader({ src, width, quality }){
    const srcParts = src.split('/');

    if((srcParts[srcParts.length - 1]).includes('svg')) {
        return src;
    }

    let widthIndexToApply = sizes.findIndex(item => {
        return item >= width
    });

    if(widthIndexToApply === -1) {
        widthIndexToApply = sizes.length - 1;
    }

    const fileName = srcParts.pop();
    const srcPartsWithScreenWidth = [].concat(srcParts, ['responsive'], [sizes[widthIndexToApply]]);
    const updatedSrcParts = [].concat(srcPartsWithScreenWidth, [fileName]);
    const updatedSrc = updatedSrcParts.join('/');

    return `${updatedSrc.replace('.jpg', '.webp')}`
}
