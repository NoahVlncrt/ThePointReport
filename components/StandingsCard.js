import Image from 'next/image'


function Team({team, index}){
    if(index % 2 === 0 ){
        return (
            <tr className="text-center bg-gray-200">
                <td>{team.divisionRank}</td>
                <td>{team.points}</td>
                <td className="flex flex-row items-center">
                    <div>
                        <Image
                            width={50}
                            height={50}
                            alt="logo"
                            src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${team.team.id}.svg`}
                        />
                    </div>
                    {team.team.name}
                </td>
                <td>{team.gamesPlayed}</td>
                <td>{team.leagueRecord.wins}</td>
                <td>{team.leagueRecord.losses}</td>
                <td>{team.leagueRecord.ot}</td>
            </tr>
        )
    }
    return(
        // <div className="grid grid-flow-row grid-cols-10 auto-cols-max gap-y-2">
        //     <p>{team.divisionRank}</p>
        //     <div className="flex flex-row col-span-5">
        //         <p>{team.team.name}</p>
        //     </div>
        //     <p></p>
        //     <p>{team.leagueRecord.wins}</p>
        //     <p>{team.leagueRecord.losses}</p>
        //     <p>{team.leagueRecord.ot}</p>
        // </div>
        <tr className="text-center">
            <td>{team.divisionRank}</td>
            <td>{team.points}</td>
            <td className="flex flex-row items-center">
                <div>
                    <Image
                        width={50}
                        height={50}
                        alt="logo"
                        src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${team.team.id}.svg`}
                    />
                </div>
                {team.team.name}
            </td>
            <td>{team.gamesPlayed}</td>
            <td>{team.leagueRecord.wins}</td>
            <td>{team.leagueRecord.losses}</td>
            <td>{team.leagueRecord.ot}</td>
        </tr>
    )
}

export default function StandingsCard({data}){
    return (
        <div className="w-full">
            <p className="text-xl font-bold mt-2">{data.division.name}</p>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th>POS</th>
                        <th>P</th>
                        <th>Team</th>
                        <th>GP</th>
                        <th>W</th>
                        <th>L</th>
                        <th>OT</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.teamRecords.map((team, index) => {
                            return <Team team={team} index={index}/>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}