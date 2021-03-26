import Image from 'next/image';
import TeamDetails from './GameCard/TeamDetails';

export default function GameCardLive({gameData}){

    const hometeamimage = `https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${gameData.teams.home.team.id}.svg`
    const awayteamimage = `https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${gameData.teams.away.team.id}.svg`

    return (
        <div className="relative md:p-2 flex divide-y-1 w-full md:rounded-md divide-solid divide-white p-2 pr-4 mb-2 md:pr-4 border-b justify-between items-center">
            <div className="rounded-full bg-red-500 top-0 rightc-0 absolute h-5 w-5 m-2 animate-pulse"/>
            <div className="flex flex-col w-full">
                <TeamDetails teamInfo={gameData.teams.away} isLive={true} isScheduled={false} type="away"/>
                <TeamDetails teamInfo={gameData.teams.home} isLive={true} isScheduled={false} type="home"/>
            </div>
        </div>
    )
}