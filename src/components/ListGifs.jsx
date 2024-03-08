import { Card } from "./Card";

export const ListGifs = ({ resultGifs }) => {
    return (
        <>
            {resultGifs.map(gif => {
                return <Card id={gif.id} title={gif.title} url={gif.url} />;
                // return <Card gif={gif} />;
            })}
        </>
    );
}