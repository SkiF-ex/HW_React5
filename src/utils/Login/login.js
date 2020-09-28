import axios from 'axios';

const login = (formData, props) => {      
    props.allUsers.forEach(async (element) => {
        if (element.name === formData.name && element.password === formData.password) {
            await axios.put('http://localhost:3000/isLogin', {
                "log": true
            });
            props.getDataIsLogin();
        };
    });
};

export default login;