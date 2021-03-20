import Image from 'next/image';

export default function GameCardFinished({data}){  
    const hometeamimage = `https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${data.teams.home.team.id}.svg`
    const awayteamimage = `https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${data.teams.away.team.id}.svg`


    return (
        <div className="mb-8 p-2 bg-black flex divide-y-1 w-2/5 rounded-md divide-solid divide-white justify-between items-center">
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
                            <p className="text-white text-xl font-bold">{data.teams.home.team.name}</p>
                            <p className="text-white font-extralight">{data.teams.home.leagueRecord.wins}-{data.teams.home.leagueRecord.losses}-{data.teams.home.leagueRecord.ot}</p>
                        </div>
                    </div>
                    <p className="text-white font-bold text-2xl">{data.teams.home.score}</p>
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
                            <p className="text-white text-xl font-bold">{data.teams.away.team.name}</p>
                            <p className="text-white font-extralight">{data.teams.away.leagueRecord.wins}-{data.teams.away.leagueRecord.losses}-{data.teams.away.leagueRecord.ot}</p>
                        </div>
                    </div>
                    <p className="text-white font-bold text-2xl">{data.teams.away.score}</p>
                </div>
            </div>
        </div>
    )
}