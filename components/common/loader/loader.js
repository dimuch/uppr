export default function loader({ src, width, quality }){
    return `${src.replace('.jpg', '.webp')}?w=${width}&q=${quality || 75}`
}
