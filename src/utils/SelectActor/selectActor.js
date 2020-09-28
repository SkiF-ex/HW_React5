const selectActor = (event, props) => {
    const actorName = event.target.innerHTML;
    let selectedActor = [];

    props.allActors.forEach((element) => {
        if (element.name + ' ' === actorName) {
            selectedActor = element;
        };
    });
    props.selectActor(selectedActor);
};

export default selectActor;