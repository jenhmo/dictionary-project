import axios from "axios";
import Results from "./Results";
import React, { useState } from "react";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] =useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response){
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response){
        setPhotos(response.data.photos);
        }


    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey ="563492ad6f917000010000016db9120ed9de49f78a84192c57b55e37";
        let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=4`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, { headers : headers }).then(handlePexelsResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load(){
        setLoaded(true);
        search();
    }

    if (loaded){
    return (
        <div className="Dictionary">
            <h1>The World of Words</h1>
            <section>
                <h2>What word would you like to discover?</h2>
            <form onSubmit={handleSubmit}>
                <input type="search" onChange={handleKeywordChange} 
                defaultValue={props.defaultKeyword}/>
                </form>
                <div className="hint">
                    suggested words: sunset, travel, wine, yoga
                </div>
                </section>
                <Results results={results} />
                <Photos photos={photos} />
        </div>
    );
    } else {
        load();
        return "Loading..";
    }
}

