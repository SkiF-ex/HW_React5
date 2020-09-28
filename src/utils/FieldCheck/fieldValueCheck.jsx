const ifFieldInputNull = (inputField, data) => {
    return !inputField ? data : inputField;
};

export default ifFieldInputNull;