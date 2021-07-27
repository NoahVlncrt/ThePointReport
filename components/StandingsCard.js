export default function StandingsCard({data}){
    return (
        <div>
            <div className="rounded-full border-2 border-black pl-2 pr-2">
                <p>{data.division.name}</p>
            </div>
            <div className="flex flex-col">
                {
                    data.teamRecords.map((team) => {
                        return <p>{team.team.name}</p>
                    })
                }
            </div>
        </div>
    )
}