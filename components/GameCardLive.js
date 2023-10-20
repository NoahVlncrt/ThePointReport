import Image from 'next/image';
import TeamDetails from './GameCard/TeamDetails';

export default function GameCardLive({gameData}){
    return (
        <div className="relative md:p-2 flex divide-y-1 w-full md:rounded-md divide-solid divide-white p-2 pr-4 mb-2 md:pr-4 md:mr-4 md:w-80 md:border-0 md:bg-black border-b justify-between items-center md:mb-4">
            <div>
                
            </div>
            <div className="flex flex-col w-full">
                <TeamDetails teamInfo={gameData.teams.away} isLive={true} isScheduled={false} type="away"/>
                <TeamDetails teamInfo={gameData.teams.home} isLive={true} isScheduled={false} type="home"/>
            </div>
        </div>
    )
}