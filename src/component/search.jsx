import React, { useState as UseState } from 'react'
import { connect } from 'react-redux';
import { getMoviesPage } from '../Action/moviesAction';

const search = (props) => {
  const [values, setValue] = UseState('')
  const handleSubmit = () => {
    props.getMoviesPage(values,false)
  }
  return (
    <div className="search">
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={values}
          placeholder="Search your movies"
        />
        <button onClick={()=> handleSubmit()}>Search</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMoviesPage: (val,obj) => dispatch(getMoviesPage(val,obj)),
  }
}
export default connect(null, mapDispatchToProps)(search);
