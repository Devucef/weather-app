import WeekWeather from '../common/WeekWeather';
import Highlights from '../common/Highlights';
import Settings from '../common/Settings';


const RightSide = () => {
    return (
        <div className='w-full relative col-span-full py-4 px-4 lg:col-span-5 dark:bg-black/50 bg-white/50'>
            <WeekWeather/>
            <Highlights/>
            <Settings/>
        </div>
    );
}



export default RightSide;
