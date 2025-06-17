import SearchBar from "./HeroSearch";
import NavMenu from "./Herotabs";


export default function HeroSearch() {
    return (
        <div className="bg-cover h-[850px]" style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
)` }}>
            <div className="flex flex-col gap-4 items-center justify-center min-h-full">
            <NavMenu/>
                <SearchBar />
            </div>
        </div>
    )
}
