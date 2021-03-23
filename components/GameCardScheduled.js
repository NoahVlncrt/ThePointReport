import Image from 'next/image'
import dayjs from 'dayjs';


export default function GameCardScheduled({data}){
    const hometeamimage = `https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${data.teams.home.team.id}.svg`
    const awayteamimage = `https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${data.teams.away.team.id}.svg`

    return (
        <div className="p-2 bg-black flex divide-y-1 w-full md:rounded-md divide-solid divide-white justify-between items-center md:w-2/5 md:mb-8">
            <div className="flex flex-col">
                <div className="flex flex-row items-center mb-1.5">
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
                <div className="flex flex-row items-center">
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
            </div>

            <p className="text-white mr-4 text-xl font-bold">{dayjs(data.gameDate).format('h')}:{dayjs(data.gameDate).format('mm')} PM</p>
        </div>
    )
}