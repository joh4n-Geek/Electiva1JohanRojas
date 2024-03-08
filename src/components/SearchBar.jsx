import { useState } from "react";

export const SearchBar = () => {
    const [inputQuery, setInputQuery] = useState('');

    const onInputChange = (event) => {
        let queryText = event.target.value.toLowerCase();
        setInputQuery(queryText);
    };

    return (
        <>
            <input 
                className="form-control" 
                placeholder="Search all the GIFs" 
                onChange={onInputChange} 
                type="search" 
            />
        </>
    );
}