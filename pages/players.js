import dayjs from 'dayjs';
import prisma from '../lib/prisma';

export default  function Players(){
    return(
        <div>
            <header className="flex flex-row justify-between items-center m-1">
                <a href="/" className="font-bold text-xl">On The Rink</a>
                <nav className="flex flex-row space-x-2">
                    <a href="/" className="font-bold underline">Scores</a>
                    <a href="/standings" className="text-gray-500">Standings</a>
                </nav>
            </header>
        </div>
    )
}

export async function getServerSideProps(context){

}