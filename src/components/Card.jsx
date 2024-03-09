import React from "react";

export const Card = ({ resultGif }) => {
    return (
        <div key={resultGif.id} className="card text-bg-dark" style={{width: 255}}>
            <img src={resultGif.images.fixed_height.url} className="card-img" alt={resultGif.title} />
        </div>
    );
}