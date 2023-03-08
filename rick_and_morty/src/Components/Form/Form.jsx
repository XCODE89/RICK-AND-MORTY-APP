const Form = () => {
    return(
        <form>
            <label htmlFor="username"></label>
            <input type="text" name="username"></input>
            <label htmlFor="password"></label>
            <input type="password" name="password"></input>
            <button>LOGIN</button>
        </form>
    )
}

export default Form;