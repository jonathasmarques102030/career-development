import "../styles/grayImg.css"

interface Prop {
    img_url: string
}

const GrayImg = (props: Prop) => {
    return(
        <img className="gray-img" src={props.img_url} alt="" />
    )
}

export default GrayImg