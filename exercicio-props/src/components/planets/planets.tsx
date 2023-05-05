import GrayImg from "../Grayimg";

interface Prop {
    name: string;
    description: string;
    img_url: string;
}

const Planets = (props: Prop) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <GrayImg img_url={props.img_url}></GrayImg>
            
        </div>
    )
}

export default Planets