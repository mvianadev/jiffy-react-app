import {useState, useEffect, useContext} from 'react'
import GifsContext from 'context/GifsContext'
import getGifs from 'services/getGifs'

const INITIAL_PAGE = 0

export default function useGifs ({ keyword } = { keyword: null }) {

  const [loading, setLoading] = useState(false)
  const [loadingNexPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const {gifs, setGifs} = useContext(GifsContext)

  // load the keyword of the localstorage
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'JavaScript'

  useEffect(function () {
    setLoading(true)

    getGifs({ keyword : keywordToUse })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        //Save the last keyword in to localstorage
        localStorage.setItem('lastKeyword', keyword)
      })
  }, [keyword, setGifs, keywordToUse])

  useEffect(function () {
    if (page === INITIAL_PAGE)  return 

    setLoadingNextPage(true)

    getGifs({ keyword: keywordToUse, page })
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })
  }, [page, keywordToUse, setGifs])

  return {loading, loadingNexPage ,gifs, setPage}
}
