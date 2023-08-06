const validation = (userData) => {
    let errors = {};
    if(!userData.name){
        errors.name = "Ingrese un nombre de usuario";
    }
    if(!/^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/.test(userData.email)) {
        errors.email = "El email es invalido"
    }
    if(!userData.email) {
        errors.email = "Este campo no puede estar vacio"
    }
    if(userData.email.length > 35) {
        errors.email = "El email no puede superar los 35 caracteres"
    }
    if(!/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/.test(userData.password)) {
        errors.password = "Formato no valido Ejm.: &Password1";
        errors.rePassword = "Formato no valido Ejm.: &Password1";
    }
    if(userData.password!==userData.rePassword){
        errors.rePassword = "Las contraseñas no coinciden"
    }
    return errors
};

export default validation;
