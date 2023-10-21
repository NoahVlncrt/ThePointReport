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


export default function ScoringEvent(props){
    const teamLogo = `https://assets.nhle.com/logos/nhl/svg/${teamNumberToAbbreviation[props.playInfo.team]}_light.svg`
    let playerPhoto = `https://cms.nhl.bamgrid.com/images/headshots/current/60x60/${props.playInfo.players[0].player.id}@2x.jpg`
    return (
        <div className="flex w-full mt-2 mb-2 items-center justify-between">
            <div className="flex w-1/3 items-center">
                <div className="block md:hidden">
                    <Image
                        src={teamLogo}
                        width={60}
                        height={60}
                        alt="team logo"
                    />
                </div>
                <div className="md:block hidden">
                    <Image
                        src={teamLogo}
                        width={90}
                        height={90}
                        alt="team logo"
                    />
                </div>
                <p>{props.playInfo.time}</p>
            </div>

            <div className="flex ml-3 justify-between w-3/5 flex-row">
                <div className="flex md:items-center">
                    <div className="rounded-full hidden md:block md:m-4">
                        <Image
                            src={playerPhoto}
                            width={60}
                            height={60}
                            alt="yeet "
                            className="rounded-full"
                        />
                    </div>
                    <div className="flex flex-col">
                        {props.playInfo.players.map((player, index) => {
                            if(index === 0){
                                return <p className="font-bold">{player.player.fullName} ({player.seasonTotal})</p>
                            }
                            if(player.playerType != 'Goalie'){
                                return <p>{player.player.fullName} ({player.seasonTotal})</p>
                            }
                        })}
                    </div>      
                </div>
            </div>
        </div>
    )
}