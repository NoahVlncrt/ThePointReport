import Head from 'next/head'
import React from 'react';
import dayjs from 'dayjs';
import GameCardScheduled from '../components/GameCardScheduled'
import GameCardFinished from '../components/GameCardFinished'
import GameCardLive from '../components/GameCardLive'

function GameDisplay({data}) {
  return (
    <div className="flex flex-wrap justify-start flex-start content-start md:ml-2">
      {
        data.games.map((game) => {
          if(game.status.statusCode === "1" || game.status.statusCode === "2"){
            return <GameCardScheduled key={data.gamePk} data={game}/>
          }
          if(game.status.statusCode === "7"){
            return <GameCardFinished key={data.gamePk} data={game}/>
          }
          if(game.status.statusCode === "3"){
            return <GameCardLive key={data.gamePk} gameData={game}/>
          }
        })
      }
    </div>
  )
}

function Home(props) {
  return (
    <div>
      {
        props.data.map((date, index) => {
          return <div>
            <div className="bg-white block ml-1.5 md:mb-3 md:ml-2">
              <p className="text-4xl font-semibold" >{dayjs(date.date).format('MMMM D, YYYY')}</p>
            </div>
            <GameDisplay data={props.data[index]}/>
          </div>
        })
      }
    </div>
  )
}

export async function getServerSideProps(context){
  let datesForRequest = [0, -5]

  let datesForRequestFormatted = datesForRequest.map((date) => {
    return dayjs().add(date, 'day').format('YYYY-MM-DD')
  })
  const res = await fetch('https://statsapi.web.nhl.com/api/v1/schedule?startDate='+datesForRequestFormatted[1]+'&endDate='+datesForRequestFormatted[0])
  const data = await res.json()

  return {props: {data: data.dates.reverse()}}
}

export default Home