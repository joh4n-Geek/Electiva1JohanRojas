import React from "react";
import { Card } from "./Card";
import { getTrendingGifs } from "./helpers/getGifs";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import './styles/ListGifs.css';

export const ListGifs = ({ resultGifs, setResultGifs }) => {
    if (resultGifs.trending.length === 0 && Array.isArray(resultGifs.trending)) {
        getTrendingGifs().then(response => {
            setResultGifs({
                trending: response
            });
        })
    }

    return (
        <div className="container masonry-grid-card">
            <ResponsiveMasonry
                columnsCountBreakPoints={{
                    1200: 4,
                    900: 3,
                    750: 2,
                    350: 1
                }}
            >
                {/* For some reason, prop gutter does not work with strings */}
                {/* It works with numbers but shows a console warning*/}
                <Masonry gutter={10}>
                    {resultGifs.trending.map((gif, id) => {
                        return <Card resultGif={gif} key={id} />;
                    })}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );
}