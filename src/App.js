import { ListGifs } from "./components/ListGifs";
import { SearchBar } from "./components/SearchBar";
import { getGifsByQuery } from "./components/helpers/getGifs";

export default function MyApp() {
    return (
        <div>
            <h1>Bienvenido a Jiphy App</h1>
            <SearchBar />
            <ListGifs />
        </div>
    );
}