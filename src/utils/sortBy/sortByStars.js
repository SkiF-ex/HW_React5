const sortByStars = (props) => {
    if (props.byStars === false) {
        props.sortByStarsDown();
    };

    if (props.byStars === true) {
        props.sortByStarsUp();
    };
};

export default sortByStars;