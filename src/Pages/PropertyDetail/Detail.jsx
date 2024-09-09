import React from 'react'
import PropertyDetail from './PropertyDetail'
import ScheduleForm from '../ScheduleForm/ScheduleForm'


const Detail = () => {
    return (
        <div><div className="flex flex-col md:flex-row gap-4 p-6 mt-2">
            <div className="flex-1">
                <PropertyDetail />
            </div>
            <div className="w-full mt-4 mr-4 md:w-1/3 lg:w-1/4">
                <div className="sticky top-24">
                    <ScheduleForm/>
                </div>
            </div>
        </div>

        </div>
    )
}

export default Detail