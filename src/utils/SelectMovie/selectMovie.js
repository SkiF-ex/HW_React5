const selectMovie = (event, props) => {
    const title = event.target.innerHTML;
    let movie;

    props.allFilms.forEach((el) => {if (el.title === title) {movie = el}});
    props.selectMovie(movie);
};

export default selectMovie;