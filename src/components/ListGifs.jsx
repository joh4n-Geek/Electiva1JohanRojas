import React from "react";
import { Card } from "./Card";
import { getTrendingGifs } from "./helpers/getGifs";

export const ListGifs = ({ resultGifs, setResultGifs }) => {
    if (resultGifs.trending.length === 0 && Array.isArray(resultGifs.trending)) {
        getTrendingGifs().then(response => {
            console.log('Hola desde getTrendingGifts en el componente ListGifts', response);
            setResultGifs({
                trending: response
            });
        })
    }

    return (
        <div className="container">
            {resultGifs.trending.map((gif, id) => {
                return <Card resultGif={gif} key={id} />;
            })}
        </div>
    );
}