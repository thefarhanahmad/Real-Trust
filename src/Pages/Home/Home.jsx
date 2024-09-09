import React from 'react'
import Slider from './Slider/Slider'


// import Properties from './Properties/Properties'
import Destinations from './Destinations/Destinations'
import FindHome from './FindYourHome/FindHome'
import Properties from './All Properties/Properties'


const Home = () => {
    return (
        <div >
            <Slider />
    
            <FindHome/>
            <Properties/>
            
            <Destinations/>
            {/* <Properties/> */}
            
        </div>
    )
}

export default Home