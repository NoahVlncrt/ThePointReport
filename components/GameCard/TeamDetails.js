import Image from 'next/image'

let scoreDisplayHandler = (isLive, isScheduled, teamInfo) => {
    if(!isLive && !isScheduled){
        if(isLive){
            return <p className="md:text-white md:font-bold font-semibold text-2xl text-black animate-pulse">{teamInfo.score}</p>
        } else {
            return <p className="md:text-white md:font-bold font-semibold text-2xl text-black">{teamInfo.score}</p>
        }
    }
}



export default function TeamDetails({teamInfo, image, isLive, isScheduled}){
    const teamLogo = `https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${teamInfo.team.id}.svg`
    console.log(teamInfo)
    return ( 
            <div className="flex flex-row items-center">
                <div className="flex flex-row w-full">
                    <Image 
                        src={teamLogo}
                        alt="home team logo"
                        width={60}
                        height={60}
                    />
                    <div>
                        <p className="md:text-white md:text-xl text-lg font-semibold md:font-bold text-black">{teamInfo.team.name}</p>
                        <p className="md:text-white font-extralight text-black">{teamInfo.leagueRecord.wins}-{teamInfo.leagueRecord.losses}-{teamInfo.leagueRecord.ot}</p>
                    </div>
                </div>
                {!isScheduled && scoreDisplayHandler(isLive, isScheduled, teamInfo)}
            </div>
    )
}