import { useState } from "react";
import { getGifsByQuery } from "./helpers/getGifs";

export const SearchBar = ({ setResultGifs }) => {
    const [inputQuery, setInputQuery] = useState('');

    const onInputChange = (event) => {
        let query = event.target.value.toLowerCase();
        setInputQuery(query);
        getGifsByQuery(query).then(response => {
            setResultGifs({
                trending: response
            });
        });
    };

    return (
        <>
            <input 
                className="form-control" 
                placeholder="Search all the GIFs" 
                value={inputQuery}
                onChange={onInputChange} 
                type="search" 
                style={{marginBottom: 50}}
            />
        </>
    );
}