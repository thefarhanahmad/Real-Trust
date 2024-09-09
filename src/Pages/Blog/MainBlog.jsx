import React from 'react'
import FindYourHome from '../Property/FindYourHome/FindYourHome'
import Blog from './Blog'

const MainBlog = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row gap-6 p-6 mt-2 ">
                <div>
                    <Blog/>
                </div>
                <div>
                    < FindYourHome/>
                </div>
            </div>
        </div>
    )
}

export default MainBlog