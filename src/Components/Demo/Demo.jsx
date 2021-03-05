import Web from '../Demo/Web';
import Mobile from '../Demo/Mobile';
import WhithScreenSizes from '../../hoc/whithScreenSizes'

const Demo=({width, height})=>{
    // console.log('props',props);
    // const width=1200;
    return <div>
        <h1>Demo version</h1>
        {/* <Mobile />
        <Web /> */}

        {
            width>=1000?<Web />:<Mobile />
        }
    </div>
}

export default WhithScreenSizes(Demo);