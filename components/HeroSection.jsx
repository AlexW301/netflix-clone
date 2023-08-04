"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function HeroSection({ initialMovies }) {
  const [movies, setMovies] = useState(initialMovies)
  const [search, setSearch] = useState('harry potter')

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
      <h1>Hero Section</h1>
      <input value={search} onChange={(e) => { setSearch(e.target.value) }} type="text" />
      {movies.Search && movies.Search.map((movie) => (
        <Link href={`/movies/${movie.imdbID}`} key={movie.imdbID}>
          <h2>{movie.Title}</h2>
          <h2>{movie.imdbID}</h2>
        </Link>
      ))}
    </div>
  )
}
