
export default function TeamStats(props){
    return(
        <div className="flex flex-row justify-center w-full md:bg-black md:rounded-md">
            <div className="flex flex-col w-4/5 md:mb-2">
                <p className="font-bold text-xl hidden md:block md:text-2xl text-left md:text-center md:mb-2">Team Stats</p>
                <div className="flex flex-row justify-between items-center">
                    <p className="md:font-semibold">{props.teamStats.away.hits}</p>
                    <p className="font-bold text-lg">Hits</p>
                    <p className="md:font-semibold">{props.teamStats.home.hits}</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p className="md:font-semibold">{props.teamStats.away.sog}</p>
                    <p className="font-bold text-lg">Shots On Goal</p>
                    <p className="md:font-semibold">{props.teamStats.home.sog}</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p className="md:font-semibold">{props.teamStats.away.penaltyMinutes}</p>
                    <p className="font-bold text-lg">Penalty Minutes</p>
                    <p className="md:font-semibold">{props.teamStats.home.penaltyMinutes}</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p className="md:font-semibold">{props.teamStats.away.blocked}</p>
                    <p className="font-bold text-lg">Blocked Shots</p>
                    <p className="md:font-semibold">{props.teamStats.home.blocked}</p>
                </div>
            </div>
        </div>
    )
}