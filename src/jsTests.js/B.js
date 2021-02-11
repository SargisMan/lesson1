const B=(props)=>{
    console.log('children: ', props.children)
    return (
    <div className="B">
        <h1>B component</h1>
        <div>{props.children}</div>
    </div>
    )
}

export default B;