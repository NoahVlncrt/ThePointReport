
export default function TeamStats(props){
    console.log(props)
    return(
        <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col w-4/5">
                <div className="flex flex-row justify-between items-center">
                    <p>{props.teamStats.away.hits}</p>
                    <p className="font-bold text-lg">Hits</p>
                    <p>{props.teamStats.home.hits}</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p>{props.teamStats.away.sog}</p>
                    <p className="font-bold text-lg">Shots On Goal</p>
                    <p>{props.teamStats.home.sog}</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p>{props.teamStats.away.penaltyMinutes}</p>
                    <p className="font-bold text-lg">Penalty Minutes</p>
                    <p>{props.teamStats.home.penaltyMinutes}</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p>{props.teamStats.away.blocked}</p>
                    <p className="font-bold text-lg">Blocked Shots</p>
                    <p>{props.teamStats.home.blocked}</p>
                </div>
            </div>
        </div>
    )
}