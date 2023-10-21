import Image from 'next/image'
const teamNumberToAbbreviation = {
    "1": "NJD",
    "2": "NYI",
    "3": "NYR",
    "4": "PHI",
    "5": "PIT",
    "6": "BOS",
    "7": "BUF",
    "8": "MTL",
    "9": "OTT",
    "10": "TOR",
    "12": "CAR",
    "13": "FLA",
    "14": "TBL",
    "15": "WSH",
    "16": "CHI",
    "17": "DET",
    "18": "NSH",
    "19": "STL",
    "20": "CGY",
    "21": "COL",
    "22": "EDM",
    "23": "VAN",
    "24": "ANA",
    "25": "DAL",
    "26": "LAK",
    "28": "SJS",
    "29": "CBJ",
    "30": "MIN",
    "52": "WPG",
    "53": "ARI",
    "54": "VGK",
    "55": "SEA",
}

function Team({team, index}){
    const teamLogo = `https://assets.nhle.com/logos/nhl/svg/${teamNumberToAbbreviation[team.team.id]}_light.svg`
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
                            src={teamLogo}
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
                        src={teamLogo}
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