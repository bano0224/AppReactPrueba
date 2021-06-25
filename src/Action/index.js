export default function getMovies(batman) {
    return function(dispatch) {
      return fetch('http://www.omdbapi.com/?apikey=20dac387&s='+ batman)
        .then(response => response.json())
        .then(json => {
          dispatch({
            type: "GET_MOVIES",
            payload: json
          });
        });
    };
  }