import TeamDetails from './GameCard/TeamDetails';
import useSWR from 'swr'

let gameStatusHandler = (gamePk) => {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR('https://statsapi.web.nhl.com/api/v1/game/'+gamePk+'/linescore', fetcher)
    if(error) return <p>error</p>
    if(!data) return <p className="self-end text-gray-700 text-opacity-75 text-sm">...</p>

    if(data.currentPeriod === 5){
        return <p className="self-end text-gray-700 text-opacity-75 text-sm">SO</p>
    }
    if(data.currentPeriod === 4){
        return <p className="self-end text-gray-700 text-opacity-75 text-sm">OT</p>
    }
    if(data.currentPeriod <= 3){
        return <p className="self-end text-gray-700 text-opacity-75 text-sm">FINAL</p>
    }

}


export default function GameCardFinished({data}){  
    //TODO: Call game live 
    return (
        <div className="md:p-2 flex divide-y-1 w-full md:rounded-md divide-solid divide-white p-2 mb-2 md:pr-4 md:mr-4 md:w-80 md:border-0 md:bg-black border-b justify-between items-center md:mb-4">
            <div className="flex flex-col w-full">
                <TeamDetails teamInfo={data.teams.home} isLive={false} isScheduled={false} type="home" className="pr-4"/>
                {gameStatusHandler(data.gamePk)}
                <TeamDetails teamInfo={data.teams.away} isLive={false} isScheduled={false} type="away" className="pr-4"/>
            </div>
        </div>
    )
}