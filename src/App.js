import { useState } from "react";
import Header from "./components/Header";
import { ListGifs } from "./components/ListGifs";
import { SearchBar } from "./components/SearchBar";

export default function MyApp() {
    const [resultGifs, setResultGifs] = useState({
        trending: [],
        search: []
    });

    return (
        <div className="container">
            <Header />
            <SearchBar setResultGifs={setResultGifs} />
            <ListGifs resultGifs={resultGifs} setResultGifs={setResultGifs} />
        </div>
    );
}