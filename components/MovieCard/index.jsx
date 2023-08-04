import React from 'react'
import Link from 'next/link'
import styles from "./moviecard.module.scss"

export default function MovieCard({ movie }) {
  return (
    <Link href={`/movies/${movie.imdbID}`} key={movie.imdbID}>
      <h2>{movie.Title}</h2>
      <h2>{movie.imdbID}</h2>
    </Link>
  )
}
