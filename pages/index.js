import Head from 'next/head'
import React, {useState, useEffect} from 'react';
import dayjs from 'dayjs';
import useSWR from 'swr';
import GameCard from '../components/GameCard'

export default function Home() {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const {data, error} = useSWR('https://statsapi.web.nhl.com/api/v1/schedule', fetcher)
  if(error) return <p>error</p>
  if(!data) return <p>loading</p>
  console.log(data)
  return (
    <div>
      <h1 className="text-4xl">{dayjs().format("MMMM")} {dayjs().format("D")} , {dayjs().format('YYYY')}</h1>
      <div className="flex flex-wrap justify-around">
        {
          data.dates[0].games.map((game) => {
            return <GameCard key={game.gamePk} data={game}/>
          })
        }
      </div>
    </div>
  )
}