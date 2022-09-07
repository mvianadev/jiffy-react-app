import { API_KEY } from "./setting"
import { API_URL } from "./setting"

const fromApiResponseToTrendingSearch = ApiResponse => {
  const {data = []} = ApiResponse
  return data
}

function getTrendingSearchApi() {
  const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}&limit=25&rating=g`

  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToTrendingSearch)
}

export default getTrendingSearchApi