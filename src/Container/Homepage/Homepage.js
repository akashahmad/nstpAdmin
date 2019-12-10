import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Section1 from '../../Components/Section1/section1'
import Section2 from '../../Components/Section2/section2'
import Section3 from '../../Components/Section3/section3'

export default ()=>{
    return(
        <>
<div style={{display:"flex"}}>
<Section1 />
<Section2/>
</div >
{/* <div>
<Section3/>
</div> */}

</>
    );
}