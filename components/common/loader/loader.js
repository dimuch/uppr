export default function loader({ src, width, quality }){
    console.log('===> ', `${src}?w=${width}&q=${quality || 75}`)
    return `${src}?w=${width}&q=${quality || 75}`
}
