import Head from 'next/head'
import React, {useState, useEffect} from 'react';
import dayjs from 'dayjs';
import useSWR from 'swr';
import GameCardScheduled from '../components/GameCardScheduled'
import GameCardFinished from '../components/GameCardFinished'
import GameCardLive from '../components/GameCardLive'
import "react-datepicker/dist/react-datepicker.css";


function GameDisplay({data}) {
  return (
    <div className="flex flex-wrap justify-evenly content-start">
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
  const [startDate, setStartDate] = useState(new Date());

  //sets up how the data will be returned
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  //takes the date and formats it so it can be used in an API call
  const dateFormattedForAPI = dayjs(startDate).format("YYYY-MM-DD")

  //calls the NHL API and gets the schedule for the day
  const {data, error} = useSWR('https://statsapi.web.nhl.com/api/v1/schedule?date='+dateFormattedForAPI, fetcher)

  //creates an array for use with dayjs.add()
  let navigationDateArray = [-2, -1, 0, 1, 2]

  //loops over each item in the above array and returns a formatted date for use with the tab navigation
  let navigationDateFormatted = navigationDateArray.map((date) => {
    return dayjs().add(date, 'day').format('MMMM D, YYYY')
  })
  
  if(error) return <p>error</p>
  return (
    <div>
      <div className="bg-white block ml-1.5 mb-3 md:hidden">
        <p className="text-4xl font-semibold" >{dayjs().format('MMMM D, YYYY')}</p>
      </div>
      <div className="bg-white mb-3 hidden md:block">
          <nav className="flex flex-col justify-between sm:flex-row">
            {
              navigationDateFormatted.map((date) => {
                if(dayjs(startDate).format('MMMM D, YYYY') === dayjs(date).format('MMMM D, YYYY')){
                  return <button key={date} onClick={() => setStartDate(dayjs(date))} className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-xl text-blue-500 border-b-2 font-medium border-blue-500">{date}</button>
                } else {
                  return <button key={date} onClick={() => setStartDate(dayjs(date))} className="text-gray-600 py-4 text-xl px-6 block hover:text-blue-500 focus:outline-none">{date}</button>
                }
              })
            }
          </nav>
        </div>
      { data ? <GameDisplay data={data}/>:<p>loading</p>}
    </div>
  )
}