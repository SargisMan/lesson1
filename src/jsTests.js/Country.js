
const Country = ({isArmenia, togglechangeCounty})=>{
    return(
         <div className={`country ${isArmenia?'armenia':''}`}>
                    <p>
                        Country : {isArmenia ? 'Armenia' : 'USA'}
                    </p>
                    {/* <button onClick={this.togglechangeCounty}>Change Country</button> */}
                    <button onClick={togglechangeCounty}>Change Country</button>
                </div>
    )
}

export default Country;