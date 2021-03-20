import Head from 'next/head'
import React, {useState, useEffect} from 'react';
import dayjs from 'dayjs';
import useSWR from 'swr';
import GameCardScheduled from '../components/GameCardScheduled'
import GameCardFinished from '../components/GameCardFinished'
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
        })
      }
    </div>
  )
}

export default function Home() {
  const [startDate, setStartDate] = useState(new Date());
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const dateFormattedForAPI = dayjs(startDate).format("YYYY-MM-DD")
  const {data, error} = useSWR('https://statsapi.web.nhl.com/api/v1/schedule?date='+dateFormattedForAPI, fetcher)
  let navigationDateArray = [-2, -1, 0, 1, 2]
  let navigationDateFormatted = navigationDateArray.map((date) => {
    return dayjs().add(date, 'day').format('MMMM D, YYYY')
  })
  if(error) return <p>error</p>
  console.log(data)
  return (
    <div>
      <div class="bg-white">
          <nav class="flex flex-col justify-between sm:flex-row">
            {
              navigationDateFormatted.map((date) => {
                if(dayjs(startDate).format('MMMM D, YYYY') === dayjs(date).format('MMMM D, YYYY')){
                  return <button onClick={() => setStartDate(dayjs(date))} class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-xl text-blue-500 border-b-2 font-medium border-blue-500">{date}</button>
                } else {
                  return <button onClick={() => setStartDate(dayjs(date))} className="text-gray-600 py-4 text-xl px-6 block hover:text-blue-500 focus:outline-none">{date}</button>
                }
              })
            }
            {/* <button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500">
                Tab 1
            </button> */}
          </nav>
        </div>
      { data ? <GameDisplay data={data}/>:<p>loading</p>}
    </div>
  )
}