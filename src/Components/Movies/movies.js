import React from 'react';
import { connect } from 'react-redux';
import {getMovies} from '../../Action/index'


export function Movies(props) {
  return (
    <div>
      <h2>Movies & Games of "The Lord of The Rings"</h2>
          {props.state.map(el => (
        <h3>{el.Title}-{el.Year}
        <div><img src={el.Poster} alt = "Poster"  width="250" height="300">
        </img>
        </div>
        </h3>

          ))}

        <button onClick={props.getMovies}>Traer Películas</button>
    </div>
    )


};


const mapStateToProps = (state) => {
  return {state};
}

// function mapDispatchToProps(dispatch) {
//   return {
//     Movies: title => dispatch(getMovies(title))
//   };
// }
// props.Movies


export default connect(mapStateToProps, {getMovies} )(Movies);
// <div>
// </div>
//   <ul>
//     </ul>
// {getMovies}
// mapDispatchToProps
