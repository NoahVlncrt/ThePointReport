import Head from 'next/head'
import React from 'react';
import dayjs from 'dayjs';
import GameCardScheduled from '../components/GameCardScheduled'
import GameCardFinished from '../components/GameCardFinished'
import GameCardLive from '../components/GameCardLive'
import Header from '../components/Header'
import SeasonStarting from '../components/SeasonStarting';

function GameDisplay({data}) {
  return (
    <div className="flex flex-wrap justify-start flex-start content-start md:ml-1">
      {
        data.games.map((game) => {
          if(game.status.statusCode === "1" || game.status.statusCode === "2"){
            return <GameCardScheduled key={game.gamePk} data={game}/>
          }
          if(game.status.statusCode === "7" || game.status.statusCode === "6"){
            return <GameCardFinished key={game.gamePk} data={game}/>
          }
          if(game.status.statusCode === "3" || game.status.statusCode === "4"){
            return <GameCardLive key={game.gamePk} gameData={game}/>
          }
        })
      }
    </div>
  )
}

function Home(props) {
  return (
    <div>
      <Head>
        <title>On The Rink</title>
        <meta property="og:title" content="On The Rink" key="title" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      {
        props.data.map((date, index) => {
          return <div key={index}>
            <div className="bg-white block ml-1.5 md:mb-3 md:ml-2">
              <p className="text-4xl font-semibold" >{dayjs(date.date).format('MMMM D, YYYY')}</p>
            </div>
            <GameDisplay data={props.data[index]}/>
          </div>
        })
      }
      {
        props.noGames && 
          <SeasonStarting/>
      }
    </div>
  )
}

export async function getServerSideProps(context){
  const res = await fetch('https://statsapi.web.nhl.com/api/v1/schedule?startDate='+dayjs().subtract(3, 'day').format('YYYY-MM-DD')+'&endDate='+dayjs().format('YYYY-MM-DD')+'&hydrate=team(leaders(categories=[points,goals,assists],gameTypes=[R,P]))')
  const data = await res.json()

  return {
    props: {
      data: data.dates.reverse(),
      noGames: data.dates.length === 0
    }
  }
}

export default Home