"use client"
import React, { useState, useEffect } from 'react'
import { MovieCard, SearchBar } from '../../components/index'
import styles from "./herosection.module.scss"
import Link from 'next/link'

export default function HeroSection({ initialMovies }) {
    const [movies, setMovies] = useState(initialMovies)
    const [search, setSearch] = useState('star wars')

    useEffect(() => {
        async function getData() {
            const res = await fetch(`/api/movies?s=${search}`)

            if (!res.ok) {
                throw new Error('Failed to fetch data')
            }

            return res.json()
        }

        getData().then((data) => {
            setMovies(data)
        })

    }, [search])

    return (
        <div>
            <SearchBar search={search} setSearch={setSearch} />
            <ul className={styles.movieContainer}>
                {movies.Search ? movies.Search.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                )) : (
                    <div>
                        try searching
                    </div>
                )}
            </ul>
        </div>
    )
}
