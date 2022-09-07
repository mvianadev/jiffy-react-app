import React, {useEffect, useState} from 'react'
import getTrendingSearch from 'services/getTrendingSearchApi'
import Category from 'components/Category'

export default function TrendingSearches() {
  const [trends, setTrends] = useState([])

  useEffect(function () {
    getTrendingSearch().then(setTrends)
  }, [])

  return <Category options={trends} name='Trending'/>
}

