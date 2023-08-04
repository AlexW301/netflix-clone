import React from 'react'
import styles from './page.module.scss'

export default async function MoviePage({params}) {
    const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${params.id}`)
    const movie = await res.json()
    console.log(movie)

    return (
        <main className={styles.main}>
            {movie.Title}
            {movie.Year}
        </main>
    )
}
