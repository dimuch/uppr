const sizes = [320, 420, 640, 750, 828, 1080, 1200, 1920];

export default function loader({ src, width, quality }){
    const srcParts = src.split('/');

    if((srcParts[srcParts.length - 1]).includes('svg')) {
        return src;
    }

    let widthIndexToApply = sizes.find(item => {
        return item >= width
    });

    if(!widthIndexToApply) {
        widthIndexToApply = sizes.length - 2;
    }

    const fileName = srcParts.pop();
    const srcPartsWithScreenWidth = [].concat(srcParts, ['responsive'], [widthIndexToApply]);
    const updatedSrcParts = [].concat(srcPartsWithScreenWidth, [fileName]);
    const updatedSrc = updatedSrcParts.join('/');

    return `${updatedSrc.replace('.jpg', '.webp')}`
}
