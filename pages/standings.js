import StandingsCard from "../components/StandingsCard"

export default function Standings(props){
    return (
        <div className="ml-2 mr-2">
            <header className="flex flex-row justify-between items-center m-1">
                <a href="/" className="font-bold text-xl">On The Rink</a>
                <nav className="flex flex-row space-x-2">
                <a href="/" className="text-gray-500">Scores</a>
                <a href="/standings" className="font-bold underline">Standings</a>
                </nav>
            </header>
            <div className="flex flex-row flex-wrap w-full justify-around lg:grid lg:grid-flow-row lg:grid-cols-2 lg:gap-2">
                {
                    props.data.records.map((division) => {                    
                        return <StandingsCard data={division}/>
                    })
                }
            </div>
        </div>
    )
}

export async function getServerSideProps(){
    let res = await fetch('https://statsapi.web.nhl.com/api/v1/standings?season=20202021')
    let data = await res.json()
    return {
        props: {
            data: data
        }
    }
}