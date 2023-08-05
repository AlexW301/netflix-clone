import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header style={{ width: "100vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Link href={`/`}>
        <Image src={`/netflix-logo.png`} alt="Netflix Logo" width={700 / 3.5} height={419 / 3.5} />
      </Link>
    </header>
  )
}
