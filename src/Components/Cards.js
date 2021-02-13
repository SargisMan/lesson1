
export default function  Cards({title, img, imgAlt, text, active}) {
    return (
        <div className={`card ${active?'active':''}`}>
            <p>{title}</p>
            <img src = {img} alt={imgAlt} className="img" />
            <p>{text}</p>
        </div>
    )
}