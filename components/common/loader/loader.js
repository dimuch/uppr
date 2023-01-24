export default function loader({ src, width, quality }){
    console.log(src);
    return `${src.replace('.jpg', '.webp')}?w=${width}&q=${quality || 75}`
}
