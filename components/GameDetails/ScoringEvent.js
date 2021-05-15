import Image from 'next/image'


export default function ScoringEvent(props){
    const teamLogo = `https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${props.playInfo.team}.svg`
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