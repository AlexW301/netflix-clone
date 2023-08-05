import React from 'react'
import styles from './page.module.scss'
import { Ratings } from '@/components'
import Image from 'next/image'
import Link from 'next/link'

export default async function MoviePage({ params }) {
    const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${params.id}`)
    const movie = await res.json()

    const { Title, Runtime, imdbRating, Poster, Plot } = movie

    return (
        <main className={styles.main}>
            {/* Back Button */}
            <Link className={styles.goBack} href={`/`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-label="Back Arrow">
                    <title>Back Arrow</title>
                    <desc>Left-pointing arrow icon indicating navigation to the previous page</desc>
                    <path d="M9 3.5L9.8125 4.3125L5.125 9H20V11H5.125L9.8125 15.6875L9 16.5L2.5 10L9 3.5Z" fill="#000000" role="presentation" />
                </svg>
            </Link>
            {/* Movie Poster */}
            <div className={styles.imgContainer}>
                <Image src={Poster} alt={Title} width={300} height={450} />
            </div>
            {/* Movie Info */}
            <div className={styles.infoSection}>
                <p className={styles.runTime}>{Runtime}</p>
                <h1 className={styles.title}>{Title}</h1>
                <Ratings imdbRating={imdbRating} />
                <p>{Plot}</p>
            </div>
        </main>
    )
}
