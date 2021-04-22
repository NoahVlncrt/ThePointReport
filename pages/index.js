import Head from 'next/head'
import React from 'react';
import dayjs from 'dayjs';
import GameCardScheduled from '../components/GameCardScheduled'
import GameCardFinished from '../components/GameCardFinished'
import GameCardLive from '../components/GameCardLive'

function GameDisplay({data}) {
  return (
    <div className="flex flex-wrap justify-start flex-start content-start md:ml-1">
      {
        data.games.map((game) => {
          if(game.status.statusCode === "1" || game.status.statusCode === "2"){
            return <GameCardScheduled key={game.gamePk} data={game}/>
          }
          if(game.status.statusCode === "7"){
            return <GameCardFinished key={game.gamePk} data={game}/>
          }
          if(game.status.statusCode === "3"){
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
    </div>
  )
}

export async function getStaticProps(context){
  const res = await fetch('https://statsapi.web.nhl.com/api/v1/schedule?startDate='+dayjs().subtract(3, 'day').format('YYYY-MM-DD')+'&endDate='+dayjs().format('YYYY-MM-DD')+'&hydrate=team(leaders(categories=[points,goals,assists],gameTypes=[R,P]))')
  const data = await res.json()
  return {
    props: {
      data: data.dates.reverse()
    },
    revalidate: 1,
  }
}

export default Home