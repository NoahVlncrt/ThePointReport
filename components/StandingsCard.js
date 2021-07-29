import Image from 'next/image'


function Team({team}){
    return(
        // <div className="grid grid-flow-row grid-cols-10 auto-cols-max gap-y-2">
        //     <p>{team.divisionRank}</p>
        //     <div className="flex flex-row col-span-5">
        //         <div className="hidden sm:block col-span-2">
        //             <Image
        //                 src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${team.team.id}.svg`}
        //                 width={50}
        //                 height={50}
        //                 alt="ye"
        //             />
        //         </div>
        //         <p>{team.team.name}</p>
        //     </div>
        //     <p></p>
        //     <p>{team.leagueRecord.wins}</p>
        //     <p>{team.leagueRecord.losses}</p>
        //     <p>{team.leagueRecord.ot}</p>
        // </div>
        <tr className="text-center">
            <td>{team.divisionRank}</td>
            <td>{team.team.name}</td>
            <td>{team.leagueRecord.wins}</td>
            <td>{team.leagueRecord.losses}</td>
            <td>{team.leagueRecord.ot}</td>
        </tr>
    )
}

export default function StandingsCard({data}){
    return (
        <table className="table-auto w-full">
            <thead>
                <tr>
                    <th>POS</th>
                    <th>Team</th>
                    <th>W</th>
                    <th>L</th>
                    <th>OT</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.teamRecords.map((team) => {
                        return <Team team={team}/>
                    })
                }
            </tbody>
        </table>
    )
}