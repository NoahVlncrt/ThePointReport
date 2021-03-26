import Head from 'next/head'
import React, {useState, useEffect} from 'react';
import dayjs from 'dayjs';
import useSWR from 'swr';
import GameCardScheduled from '../components/GameCardScheduled'
import GameCardFinished from '../components/GameCardFinished'
import GameCardLive from '../components/GameCardLive'
import "react-datepicker/dist/react-datepicker.css";


function GameDisplay({date}) {

  //sets up how the data will be returned
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  //takes the date and formats it so it can be used in an API call
  const dateFormattedForAPI = dayjs(date).format("YYYY-MM-DD")

  //calls the NHL API and gets the schedule for the day
  const {data, error} = useSWR('https://statsapi.web.nhl.com/api/v1/schedule?date='+dateFormattedForAPI, fetcher)

  if(!data) return <p>loading</p>
  if(error) return <p>error</p>
  return (
    <div className="flex flex-wrap justify-start flex-start content-start md:ml-2">
      {
        data.dates[0].games.map((game) => {
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

export default function Home() {

  //creates an array for use with dayjs.add()
  let navigationDateArray = [0, -1, -2, -3, -4, -5]

  //loops over each item in the above array and returns a formatted date for use with the tab navigation
  let navigationDateFormatted = navigationDateArray.map((date) => {
    return dayjs().add(date, 'day').format('MMMM D, YYYY')
  })
  
  return (
    <div>
      {
        navigationDateFormatted.map((date) => {
          return <div>
            <div className="bg-white block ml-1.5 md:mb-3 md:ml-2">
              <p className="text-4xl font-semibold" >{dayjs(date).format('MMMM D, YYYY')}</p>
            </div>
            <GameDisplay date={date}/>
          </div>
        })
      }
    </div>
  )
}