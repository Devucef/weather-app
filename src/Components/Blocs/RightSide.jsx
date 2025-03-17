import React from 'react';
import WeekWeather from '../Common/WeekWeather';
import Highlights from '../Common/Highlights';
import Settings from '../Common/Settings';


const RightSide = () => {
    return (
        <div className='w-full relative col-span-full py-4 px-4 lg:col-span-5 dark:bg-black/50 duration-300 bg-white/50'>
            <WeekWeather/>
            <Highlights/>
            <Settings/>
        </div>
    );
}



export default RightSide;
