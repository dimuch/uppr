const sizes = [320, 420, 640, 750, 828, 1080, 1200, 1920];

export default function loader({ src, width, quality }){
    const srcParts = src.split('/');
    let widthIndexToApply = sizes.findIndex(item => item > width);

    if(widthIndexToApply === -1) {
        widthIndexToApply = sizes.length - 1;
    }

    const fileName = srcParts.pop();
    const srcPartsWithScreenWidth = [].concat(srcParts, [sizes[widthIndexToApply]]);
    const updatedSrcParts = [].concat(srcPartsWithScreenWidth, [fileName]);
    const updatedSrc = updatedSrcParts.join('/');

    console.log('width', width, widthIndexToApply, updatedSrc);
    return `${updatedSrc.replace('.jpg', '.webp')}`
}
