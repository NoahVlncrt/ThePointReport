import Image from 'next/image';
import TeamDetails from './GameCard/TeamDetails';


export default function GameCardFinished({data}){  
    
    const hometeamimage = `https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${data.teams.home.team.id}.svg`
    const awayteamimage = `https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${data.teams.away.team.id}.svg`
    
    return (
        <div className="md:p-2 flex divide-y-1 w-full md:rounded-md divide-solid divide-white p-2 pr-4 mb-2 md:pr-4 md:mr-4 md:w-80 md:border-0 md:bg-black border-b justify-between items-center md:mb-4 hover:shadow-lg">
            <div className="flex flex-col w-full">
                <TeamDetails teamInfo={data.teams.home} isLive={false} isScheduled={false} type="home"/>
                <TeamDetails teamInfo={data.teams.away} isLive={false} isScheduled={false} type="away"/>
            </div>
        </div>
    )
}