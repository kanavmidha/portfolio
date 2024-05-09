export default function WorksLayout (props) {
    return (
                <a className={props.a} href={props.link}>
                    <div>
                        <picture className={props.image}>
                            <source srcSet={props.lgImg} media="(min-width:500px)"></source>
                            <img className={props.image} src={props.smImg}></img>
                        </picture>
                        <h3 className={props.h3}>{props.name}</h3>
                        <p className={props.p}>{props.description}</p>
                    </div>
                </a>
    )
}