
export default function  Card({title, img, imgAlt, text, active}) {
    return (
        <div className={`card ${active?'active':''}`}>
            <p>{title}</p>
            <img src = {img} alt={imgAlt} />
            <p>{text}</p>
        </div>
    )
}