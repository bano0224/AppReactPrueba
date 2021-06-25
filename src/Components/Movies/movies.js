import React from 'react';
import { connect } from 'react-redux';
import getMovies from '../../Action/index'




export function Movies({getMovies, state}) {
  return (
    <div>
      <h2>Señor de los Anillos</h2>
        <ul>
          {state.map(el => (
        <div>
        <h4>{el.title}</h4>
        </div>
          ))}
        </ul>
        <button onClick={handleSubmit}>Traer Películas</button>
    </div>
    )

    function handleSubmit(e) {
        e.preventDefault();
        getMovies(state);
    }
};


const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovies: el => dispatch(getMovies(el))
      }
}


export default connect(mapStateToProps, mapDispatchToProps)(Movies);
