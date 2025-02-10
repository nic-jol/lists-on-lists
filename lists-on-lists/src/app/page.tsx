'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import StringList from "./StringList";


export default function Home() {
    const [movies, setMovies] = useState(['Mamma Mia', 'Carol', 'But I\'m a Cheerleader'])
    const [televisionShows, setTelevisionShows] = useState(['Pushing Daisies', 'Elsbeth', 'Murdoch Mysteries'])
    const [videoGames, setVideoGames] = useState(['Journey', 'Stardew Valley', 'Animal Crossing'])

    function addToMovieList(){
        const newMovie = 'Superhero Movie #' + movies.length
        setMovies([...movies, newMovie])
    }

    function addToTvList(){
        const newTelevisionShow = 'Cop Show #' + televisionShows.length
        setMovies([...televisionShows, newTelevisionShow])
    }

    function addToVideoGamesList(){
        const newVideoGame = 'Halo ' + videoGames.length
        setMovies([...videoGames, newVideoGame])
    }

    return (

        <div>
            <div className={styles.pageHeader}>
                <h1>Lists on Lists</h1>
            </div>
            <div className={styles.column}>
                <h2>Movies</h2>
                <StringList 
                items={movies} 
                addToList={addToMovieList}
                />
            </div>
            <div className={styles.column}>
                <h2>Television</h2>
                <StringList items={televisionShows} addToList={addToTvList} />
            </div>
            <div className={styles.column}>
                <h2>Video Games</h2>
                <StringList items={videoGames} addToList={addToVideoGamesList} />
            </div>
        </div>
    );

    function InnerStringList(id: string) {
        return <li>{id}</li>;
    }
}
