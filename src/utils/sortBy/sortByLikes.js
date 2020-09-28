const sortByLikes = (props) => {
    if (props.byLikes === false) {
        props.sortByLikeDown();
    };

    if (props.byLikes === true) {
        props.sortByLikeUp();
    };
};

export default sortByLikes;