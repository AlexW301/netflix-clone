import React from 'react'
import styles from "./moviecard.module.scss"
import Link from 'next/link'
import Image from 'next/image'

export default function MovieCard({ movie }) {
  return (
    <Link href={`/movies/${movie.imdbID}`} key={movie.imdbID}>
      <div className={styles.imgContainer}>
        {/* Overlay */}
        <div className={styles.overlay}>
          <p>See More</p>
        </div>
        {/* Image */}
        <Image style={{ objectFit: 'cover', borderRadius: '8px' }} src={movie.Poster === null || movie.Poster === "N/A" ? '/placeholder-poster.png' : movie.Poster} alt={movie.Title} fill />
      </div>
    </Link>
  )
}
