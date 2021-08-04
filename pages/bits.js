import Prismic from "@prismicio/client";

import { Client } from '../prismic-config'


function Bits(){
    return(
        <div>
            <header className="flex flex-row justify-between items-center m-1">
                <a href="/" className="font-bold text-xl">On The Rink</a>
                <nav className="flex flex-row space-x-2">
                <a href="/" className="text-gray-500">Scores</a>
                <a href="/standings" className="font-bold underline">Standings</a>
                </nav>
            </header>
        </div>
    )
}

export async function getServerSideProps(){
    const document = await Client.query(Prismic.Predicates.at('document.type', 'news'))
    console.log(document.results[0].data)
    return {props: {h: "t"}}
}

export default Bits