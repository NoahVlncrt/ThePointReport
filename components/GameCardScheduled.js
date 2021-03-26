import dayjs from 'dayjs';
import TeamDetails from './GameCard/TeamDetails';


export default function GameCardScheduled({data}){
    return (
        <div className="md:p-2 flex divide-y-1 w-full md:rounded-md divide-solid divide-white p-2 pr-4 mb-2 md:pr-4 md:mr-4 md:w-80 md:border-0 md:bg-black border-b justify-between items-center md:mb-4">
            <div className="flex flex-col w-full">
                <TeamDetails teamInfo={data.teams.away} isLive={false} isScheduled={true} type="away"/>
                <TeamDetails teamInfo={data.teams.home} isLive={false} isScheduled={true} type="home"/>
            </div>
            <p className="text-black  text-lg font-semibold w-40 md:text-white md:font-bold md:text-xl md:w-45 text-right">{dayjs(data.gameDate).format('h')}:{dayjs(data.gameDate).format('mm')} PM</p>
        </div>
    )
}