export function obtenerFavoritosStorage() {
    const favs = localStorage.getItem('favoritos')
    const favoritos = JSON.parse(favs) || []
    return favoritos
  }
  
  export function agregarFavoritosStorage(pelicula) {
    const favoritos = obtenerFavoritosStorage()
    const newFav = [...favoritos, pelicula]
    localStorage.setItem('favoritos', JSON.stringify(newFav))
    return newFav;
  }
  
  export function sacarFavoritosStorage(peliculaId) {
    const favoritos = obtenerFavoritosStorage()
    const newFav = favoritos.filter(fav => fav.id !== peliculaId)
    localStorage.setItem('favoritos', JSON.stringify(newFav))
    return newFav;
  }
  
  export function esFavorito(peliculaId) {
    const favoritos = obtenerFavoritosStorage()
    return Boolean(favoritos.find(fav => fav.id === peliculaId))
  }