import { useEffect as UseEffect } from 'react'
import { connect } from 'react-redux';
import Header from './Header';
import { getMoviesPage } from '../Action/moviesAction';
const DEFAULT_PLACEHOLDER_IMAGE =
  'http://www.movienewz.com/img/films/poster-holder.jpg'

const movieDetail = (props) => {
  UseEffect(() => {
    if(props.location?.state?.id === undefined){
      props.history.push('/')
    }else{
      props.getMoviesPage(props.location.state.id,true)
    }
    
  }, [])
  return (
    <div>
      <Header/>
      <div className='container'>
        <div>
          <img
            className="borderRad10"
            src={props.moviesReducer.getListMovies.data.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : props.moviesReducer.getListMovies.data.Poster || DEFAULT_PLACEHOLDER_IMAGE}
            alt={props.moviesReducer.getListMovies.data.Title||'pic'}
          />
        </div>
        <div className='malef24'>
          <table>
            <tr><td>Title</td><td>:</td><td></td>{props.moviesReducer.getListMovies.data?.Title||''}</tr>
            <tr><td>Year</td><td>:</td><td></td>{props.moviesReducer.getListMovies.data?.Year||''}</tr>
            <tr><td>Rated</td><td>:</td><td></td>{props.moviesReducer.getListMovies.data?.Rated||''}</tr>
            <tr><td>Released</td><td>:</td><td></td>{props.moviesReducer.getListMovies.data?.Released||''}</tr>
            <tr><td>Runtime</td><td>:</td><td></td>{props.moviesReducer.getListMovies.data?.Runtime||''}</tr>
            <tr><td>Language</td><td>:</td><td></td>{props.moviesReducer.getListMovies.data?.Language||''}</tr>
            <tr style={{verticalAlign: "top"}}><td>Description</td><td>:</td><td></td>{props.moviesReducer.getListMovies.data?.Plot||''}</tr>
            <tr><td>Genre</td><td>:</td><td></td>{props.moviesReducer.getListMovies.data?.Genre||''}</tr>
            <tr><td>Director</td><td>:</td><td></td>{props.moviesReducer.getListMovies.data?.Director||''}</tr>
            <tr><td>Writer</td><td>:</td><td></td>{props.moviesReducer.getListMovies.data?.Writer||''}</tr>
            <tr><td>Actors</td><td>:</td><td></td>{props.moviesReducer.getListMovies.data?.Actors||''}</tr>
            <tr><td>Ratings</td><td>:</td><td></td>
             <div className='containerRat' >
                {(props.moviesReducer.getListMovies.data.Ratings|| []).map((val,i)=> (
                  <span key={i}>
                    <div className='rating'>
                        {val.Source} {val.Value}
                    </div>
                  </span>
                ))
                ||''}
              </div>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    moviesReducer: state.moviesReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMoviesPage: (val,obj) => dispatch(getMoviesPage(val,obj)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(movieDetail);
