import { useEffect as UseEffect } from 'react'
import { connect } from 'react-redux';
import Header from './Header';
import Search from './search';
import MovieCard from './Card';
import { getMoviesPage } from '../Action/moviesAction';

const home = (props) => {
  UseEffect(() => {
    props.getMoviesPage('man',false)
  }, [])
  return (
    <div>
      <Header/>
      <Search/>
      {props.moviesReducer.getListMovies.load ?
      'loading'
      :
      props.moviesReducer.getListMovies.stat ?
        <div className="movie-list__container">
          {!props.moviesReducer.getListMovies.obj && props.moviesReducer.getListMovies.data.map((_, i)=> (
              <MovieCard  movie={_} key={i}/>
            ))}
        </div>
        :
        `error ${props.moviesReducer.getListMovies.msg}`
     }
     
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
export default connect(mapStateToProps, mapDispatchToProps)(home);
