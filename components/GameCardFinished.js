import Image from 'next/image';
import TeamDetails from './GameCard/TeamDetails';


export default function GameCardFinished({data}){  
    
    const hometeamimage = `https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${data.teams.home.team.id}.svg`
    const awayteamimage = `https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${data.teams.away.team.id}.svg`
    
    return (
        <div className="md:p-2 pr-2 flex divide-y-1 w-full md:rounded-md divide-solid divide-white mb-2 border-b justify-between items-center md:w-2/5 md:mb-8 md:bg-black">
            <div className="flex flex-col w-full">
                <TeamDetails teamInfo={data.teams.home} isLive={false} isScheduled={false}/>
                <TeamDetails teamInfo={data.teams.away} isLive={false} isScheduled={false}/>
            </div>
        </div>
    )
}