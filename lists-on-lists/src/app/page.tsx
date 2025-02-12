'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import StringList from "./StringList";


export default function Home() {
    const [movies, setMovies] = useState<String[]>([])
    const [televisionShows, setTelevisionShows] = useState<String[]>([])
    const [videoGames, setVideoGames] = useState<String[]>([])

    function addToMovieList(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newMovie = (event.currentTarget[0] as HTMLInputElement).value;

        if (validListItem(newMovie)) {
            (event.currentTarget[0] as HTMLInputElement).value = '';
            setMovies([...movies, newMovie])
        }
    }

    function addToTvList(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newTelevisionShow = (event.currentTarget[0] as HTMLInputElement).value;

        if (validListItem(newTelevisionShow)) {
            (event.currentTarget[0] as HTMLInputElement).value = '';
            setTelevisionShows([...televisionShows, newTelevisionShow])
        }
    }

    function addToVideoGamesList(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newVideoGame = (event.currentTarget[0] as HTMLInputElement).value;

        if (validListItem(newVideoGame)) {
            (event.currentTarget[0] as HTMLInputElement).value = '';
            setVideoGames([...videoGames, newVideoGame])
        }
    }

    function validListItem(newItem: string) {
        return newItem && newItem.trim().length;
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
