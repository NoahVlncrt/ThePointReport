import Image from 'next/image'


// checks if the game is live and returns a score field with a pulse animation
let scoreDisplayHandler = (isLive, isScheduled, teamInfo) => {
    if(isLive){
        return <p className="md:font-bold font-semibold text-2xl md:text-white text-black animate-pulse">{teamInfo.score}</p>
    }
    if(!isScheduled && !isLive){
        return <p className="md:font-bold font-semibold text-2xl md:text-white text-gray-600">{teamInfo.score}</p>
    }
}


// checks if the game is finished and returns a lighter colored team
let teamHander = (isLive, isScheduled, teamInfo) => {
    if(!isScheduled && !isLive){
        return <p className="text-lg font-semibold md:font-bold md:text-white text-gray-700">{teamInfo.team.name}</p>
    } else {
        return <p className="md:text-xl text-lg font-semibold md:font-bold md:text-white text-black">{teamInfo.team.name}</p>
    }
}

export default function TeamDetails({teamInfo, image, isLive, isScheduled, type}){
    const teamLogo = `https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${teamInfo.team.id}.svg`
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
                        {teamHander(isLive, isScheduled, teamInfo)}
                        <p className="font-extralight text-black md:text-white">{teamInfo.leagueRecord.wins}-{teamInfo.leagueRecord.losses}-{teamInfo.leagueRecord.ot}</p>
                    </div>
                </div>
                {scoreDisplayHandler(isLive, isScheduled, teamInfo)}
            </div>
    )
}