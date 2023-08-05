import React from 'react'
import styles from "./searchbar.module.scss"

export default function SearchBar({ search, setSearch}) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{`Search Movies`}</h1>
      <input className={styles.searchBar} value={search} onChange={(e) => { setSearch(e.target.value) }} type="text" />
    </div>
  )
}
