import dayjs from "dayjs"
import Image from 'next/image'
import ScoringEvent from '../../components/GameDetails/ScoringEvent'

function Game(props){

    console.log(props.data.periods)
    return (
        <div className="ml-2 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <p className="text-xl">{dayjs(props.data.gameDate).format('MMMM D, YYYY')}</p>
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-col-reverse">
                    <div className="flex flex-col justify-center">
                        <p>{props.data.away.abbreviation}</p>
                    </div>
                    <div className="-mr-2 -ml-2 -mb-5">
                        <Image
                            src={'https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/'+props.data.away.id+'.svg'}
                            width={80}
                            height={80}
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-between w-44">
                    <p className="font-bold text-2xl">{props.data.away.score}</p>
                    <p>FINAL</p>
                    <p className="font-bold text-2xl">{props.data.home.score}</p>
                </div>
                <div className="flex items-center flex-col">
                    <div className="-mr-2 -ml-2 -mb-5">
                        <Image
                            src={'https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/'+props.data.home.id+'.svg'}
                            width={80}
                            height={80}
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <p>{props.data.home.abbreviation}</p>
                        {/* <p>{props.data.liveData.linescore.teams.home.goals}</p> */}
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                {props.data.periods.map((period, index) => {
                    return <div className="w-full">
                        <p className="font-bold text-xl">Period {index +1}</p>
                        <div id="period">
                            {props.data.scoringPlays.map((play, index2) => {
                                if(play.about.period === index +1){
                                    return <ScoringEvent playInfo={play}/>
                                }
                            })}
                        </div>
                        {
                            props.data.scoringPlays.map((play, index2) => {
                                if(play.about.period != index -1 && play.about.period != index +1 && play.about.period === index && play.about.period != index +2 && play.about.period != index -2 && index2 <= 0){
                                    return <p> no play</p>
                                }
                            })
                        }
                        
                    </div>
                })}
                {/* {props.data.scoringPlays.map((play) => {
                    return <ScoringEvent playInfo={play}/>
                })} */}
            </div>
        </div>
    )
}

export async function getServerSideProps(context){
    const res = await fetch('https://statsapi.web.nhl.com/api/v1/game/'+context.params.gameid+'/feed/live')

    const data = await res.json()

    let scoringPlays = data.liveData.plays.scoringPlays.map((play) => {
        return data.liveData.plays.allPlays[play]
    })

    let periodArray = new Array(data.liveData.linescore.currentPeriod)

    let sortedData = {
        gameDate: data.gameData.datetime.dateTime,
        periods: periodArray,
        scoringPlays,
        away: {
            abbreviation: data.gameData.teams.away.abbreviation,
            score: data.liveData.linescore.teams.away.goals,
            id: data.gameData.teams.away.id
        },
        home: {
            abbreviation: data.gameData.teams.home.abbreviation,
            score: data.liveData.linescore.teams.home.goals,
            id: data.gameData.teams.home.id
        }
    }
    return {
        props: {
            data: sortedData
        }
    }
}


export default Game