import React from 'react'
import { Link } from 'react-router-dom'

const DEFAULT_PLACEHOLDER_IMAGE =
  'http://www.movienewz.com/img/films/poster-holder.jpg'

const CardMovie = ({ movie }) => {
  const [id,setId] = React.useState('')
  React.useEffect(() => {
    window.onclick = function(event) {
      setId('')
    }
  }, [id])
  const handleModal = bol => {
    setId(movie.imdbID)
  }

  return (
    <div 
      className="movie-list__item"
      key={movie.imdbID}
    >
        <img
          onClick={() => handleModal(true)}
          src={movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster || DEFAULT_PLACEHOLDER_IMAGE}
          alt={movie.Title||'pic'}
        />
      <Link
        to={{
          pathname: "/moviedetail",
          state: { id: movie.imdbID }
        }}
      >
        <p className="movie-list__item-title">{movie.Title}</p>
        <p className="movie-list__item-year">{movie.Year}</p>
      </Link>
        <div id={`myModal${movie.imdbID}`} style={{display:id===movie.imdbID?'block':'none'}} className="modal">
          <div className="modal-content" >
            <img
              src={movie.Poster || DEFAULT_PLACEHOLDER_IMAGE}
              alt={movie.Title||'pic'}
            />
          </div>
        </div>
    </div>
  )
}

export default CardMovie
