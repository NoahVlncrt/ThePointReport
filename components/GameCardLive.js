import Image from 'next/image';

export default function GameCardLive({gameData}){

    const hometeamimage = `https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${gameData.teams.home.team.id}.svg`
    const awayteamimage = `https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${gameData.teams.away.team.id}.svg`

    return (
        <div className="relative md:p-2 flex divide-y-1 w-full md:rounded-md divide-solid divide-white p-2 pr-4 mb-2 md:pr-2 border-b justify-between items-center md:w-2/5 md:mb-8 md:bg-black">
            <div className="rounded-full bg-red-500 top-0 rightc-0 absolute h-5 w-5 m-2 animate-pulse"/>
            <div className="flex flex-col w-full">
                <div className="flex flex-row items-center mb-1.5">
                    <div className="flex flex-row w-full">
                        <Image 
                            src={hometeamimage}
                            alt="home team logo"
                            width={60}
                            height={60}
                        />
                        <div>
                            <p className="md:text-white md:text-xl text-lg font-semibold text-black">{gameData.teams.home.team.name}</p>
                            <p className="md:text-white font-extralight text-black">{gameData.teams.home.leagueRecord.wins}-{gameData.teams.home.leagueRecord.losses}-{gameData.teams.home.leagueRecord.ot}</p>
                        </div>
                    </div>
                    <p className="md:text-white md:font-bold font-semibold text-2xl text-black animate-pulse">{gameData.teams.home.score}</p>
                </div>
                <div className="flex flex-row items-center">
                    <div className="flex flex-row w-full">
                        <Image
                            src={awayteamimage}
                            alt="away team logo"
                            width={60}
                            height={60}
                        />
                        <div>
                            <p className="md:text-white md:text-xl text-lg md:font-bold font-semibold text-black">{gameData.teams.away.team.name}</p>
                            <p className="md:text-white font-extralight text-black">{gameData.teams.away.leagueRecord.wins}-{gameData.teams.away.leagueRecord.losses}-{gameData.teams.away.leagueRecord.ot}</p>
                        </div>
                    </div>
                    <p className="md:text-white md:font-bold font-semibold text-2xl text-black animate-pulse">{gameData.teams.away.score}</p>
                </div>
            </div>
        </div>
    )
}