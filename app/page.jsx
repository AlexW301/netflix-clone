import Image from 'next/image'
import styles from './page.module.scss'
import { HeroSection } from '@/components'

export default async function Home() {
  const initialMovies = await getData()

  return (
    <main className={styles.main}>
      <HeroSection initialMovies={initialMovies} />
    </main>
  )
}

async function getData() {
  const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=star%20wars`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}