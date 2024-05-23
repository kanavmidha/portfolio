export default function WorksLayout (props) {
    return (
        <a className={props.a} href={props.link} target="_blank">
            <div>
                <picture className={props.image}>
                    <source srcSet={props.lgImg} media="(min-width:500px)"></source>
                    <img className={props.image} src={props.smImg}></img>
                </picture>
                <h3 className={props.h3}>{props.name}</h3>
                {props.description}
            </div>
        </a>
    )
}