import dayjs from 'dayjs';
import TeamDetails from './GameCard/TeamDetails';


export default function GameCardScheduled({data}){
    return (
        <div className="md:p-2 pr-2 flex divide-y-1 w-full md:rounded-md divide-solid divide-white border-b justify-between items-center md:w-2/5 md:mb-8 md:bg-black">
            <div className="flex flex-col w-full">
                <TeamDetails teamInfo={data.teams.away} isLive={false} isScheduled={true}/>
                <TeamDetails teamInfo={data.teams.home} isLive={false} isScheduled={true}/>
            </div>
            <p className="md:text-white text-black  text-lg font-semibold w-40 md:font-bold md:text-xl md:w-45 text-right">{dayjs(data.gameDate).format('h')}:{dayjs(data.gameDate).format('mm')} PM</p>
        </div>
    )
}