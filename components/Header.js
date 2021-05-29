
export default function HeaderNav(){
    return(
        <div class="container mx-auto bg-purple-300 p-5">
            <nav class="flex justify-between">
                <div>
                    <a href="#">Logo</a>
                </div>
                <ul class="flex flex-row">
                    <li class="pr-5"><a> Services </a></li>
                    <li class="pr-5"><a>Porfolio</a></li>
                    <li class="pr-5"><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}