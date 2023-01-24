export default function loader({ src, width, quality }){
    console.log(src);
    return `${src}?w=${width}&q=${quality || 75}`
}
