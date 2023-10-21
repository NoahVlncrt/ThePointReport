import Head from 'next/head'
import React, {useEffect} from 'react';
import dayjs from 'dayjs';
import GameCardScheduled from '../components/GameCardScheduled'
import GameCardFinished from '../components/GameCardFinished'
import GameCardLive from '../components/GameCardLive'
import Header from '../components/Header'
import SeasonStarting from '../components/SeasonStarting';
import * as Scroll from 'react-scroll';


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
  useEffect(() => {
    Scroll.scroller.scrollTo(dayjs(new Date()).format('MMMM D, YYYY'), {
      duration: 500,
      delay: 100,
      smooth: true
    })
  }, [])
  return (
    <div>
      <Head>
        <title>On The Rink</title>
        <meta property="og:title" content="On The Rink" key="title" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <header className="flex flex-row justify-between items-end m-1">
        <a href="/" className="font-bold text-2xl">On The Rink</a>
        <nav className="flex flex-row space-x-2">
          <a href="/" className="font-bold underline">Scores</a>
          <a href="/standings" className="font-bold">Standings</a>
        </nav>
      </header>
      {
        props.data.map((date, index) => {
          return <div key={index} id={dayjs().format(date.date)} name={dayjs(date.date).format('MMMM D, YYYY')}>
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
  // this call exists for off season development purposes
  // const res = await fetch('https://statsapi.web.nhl.com/api/v1/schedule?startDate=2021-05-11&endDate=2021-05-15&hydrate=team(leaders(categories=[points,goals,assists],gameTypes=[R,P]))')
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