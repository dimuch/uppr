export default function loader({ src, width, quality }){
    return `${src}?w=${width}&q=${quality || 75}`
}
