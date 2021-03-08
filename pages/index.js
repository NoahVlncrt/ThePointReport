import Head from 'next/head'
import React, {useState, useEffect} from 'react';
import dayjs from 'dayjs';
import useSWR from 'swr';
import GameCardScheduled from '../components/GameCardScheduled'
import GameCardLive from '../components/GameCardLive'
import GameCardFinished from '../components/GameCardFinished'
import DatePicker from "react-datepicker";
import {IoCalendarOutline} from 'react-icons/io5'
import "react-datepicker/dist/react-datepicker.css";


function GameDisplay({data}) {
  return (
    <div className="flex flex-wrap justify-evenly content-start">
      {
        data.dates[0].games.map((game) => {
          if(game.status.statusCode === "3"){
            return <GameCardLive key={data.gamePk} data={game}/>
          }
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
  const dateFormatted = dayjs(startDate).format("YYYY-MM-DD")
  const {data, error} = useSWR('https://statsapi.web.nhl.com/api/v1/schedule?date='+dateFormatted, fetcher)
  if(error) return <p>error</p>
  console.log(data)
  return (
    <div>
      <div className="flex items-baseline">
        <h1 className="text-4xl">{dayjs(startDate).format("MMMM")} {dayjs(startDate).format("D")} , {dayjs(startDate).format('YYYY')}</h1>
        <DatePicker 
          selected={startDate} 
          onChange={date => setStartDate(date)} 
          customInput={<IoCalendarOutline size={28}/>}
        />
      </div>
      { data ? <GameDisplay data={data}/>:<p>loading</p>}
    </div>
  )
}