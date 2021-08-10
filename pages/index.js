import React, { useEffect } from 'react'
import tmdb from "../src/tmdb"

export default function Home() {

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista
      let list = await tmdb.getHomeList()
      console.log(list)
    }

    loadAll()
  }, [])


  return (
    <div>Olá Mundo!</div>
  )
}
