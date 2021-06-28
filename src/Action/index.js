export const GET_MOVIES = "GET_MOVIES"

export function getMovies() {
 return function (dispatch) {
    return fetch("https://www.omdbapi.com/?apikey=20dac387&s=Lord_of_the_rings")
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: GET_MOVIES,
          payload: json
        });
      });
  }
};
  // const payload = [
  //   {id:1, name: "Batman Regresa"},
  //   {id:2, name: "Batman El Caballero de la Noche"}
  //
  // ]
  //   return {
  //     type: GET_MOVIES,
  //     payload
  //   }
  // }
  //
// http://jsonplaceholder.typicode.com/users
//www.omdbapi.com/?apikey=20dac387&s=batman
