const validation = (userData) => {
    let errors = {};
    if(!/^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/.test(userData.username)) {
        errors.username = "El email es invalido"
    }
    if(!userData.username) {
        errors.username = "Este campo no puede estar vacio"
    }
    if(userData.username.length > 35) {
        errors.username = "El email no puede superar los 35 caracteres"
    }
    if(!userData.password.match(/\d/)){
        errors.password = "Password debe contener al menos un numero"   
    }
    if(userData.password.length < 6 || userData.password.length > 10 ) {
        errors.password = "Password debe tener entre 6 y 10 caracteres"
    }
    return errors
};

export default validation;

