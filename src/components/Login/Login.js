export default function Login({
    login,
    credentials,
    handleChangeAuth
}){
    return(
        <>
            <h6>Login</h6>
            <form onSubmit={(e) => {
                e.preventDefault()
                login()
            }}>
                <input type="text" value={credentials.email} name="email" onChange={handleChangeAuth} placeholder={'Email'} />
                <input type="password" value={credentials.password} name="password" onChange={handleChangeAuth} placeholder={'Password'} />
                <input type="submit" value="Login as Existing User"/>
            </form>
        </>
    )
}