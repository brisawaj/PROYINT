export async function getMovies(sortBy, actualPage) {
    return fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${actualPage}&sort_by=${sortBy}&api_key=8942348488014765a582e61cb7357525`)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        return data.results
    })
    .catch((err) => {
      
        return []
    })
}