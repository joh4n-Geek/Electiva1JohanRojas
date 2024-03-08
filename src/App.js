import { useEffect, useState } from "react";
import { ListGifs } from "./components/ListGifs";
import { SearchBar } from "./components/SearchBar";
import { getGifsByQuery, getTrendingGifs } from "./components/helpers/getGifs";

export default function MyApp() {
    // const [inputQuery, setInputQuery] = useState('');
    const [resultGifs, setResultGifs] = useState({
        trending: [],
        search: []
    });

    // useEffect(() => {
            // setResultGifs({
            //     trending: []
            // });
    // })

    return (
        <div className="container" style={{backgroundColor: 'gray'}}>
            <h1>Bienvenido a Jiphy App</h1>
            <SearchBar setResultGifs={setResultGifs} />
            <ListGifs resultGifs={resultGifs} setResultGifs={setResultGifs} />
        </div>
    );
}