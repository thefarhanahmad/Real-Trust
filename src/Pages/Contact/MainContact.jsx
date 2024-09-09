import React from 'react'
import Contact from './Contact'
import FindYourHome from '../Property/FindYourHome/FindYourHome'
import img1 from '../../assets/Images/Home-img/slider3.jpeg'


const MainContact = () => {
    return (
        <div>

            <div>
                <img src={img1}  alt="" />
            </div>

            <div className="flex flex-col md:flex-row gap-6 p-6 mt-2 ">
                <div >
                    <Contact />
                </div>
                <div className='mr-6'>
                    < FindYourHome />
                </div>

            </div>
        </div>
    )
}

export default MainContact