export default function SignUp({
    credentials,
    signUp,
    handleChangeAuth
}){
    return(
        <>
            <h6>Sign Up</h6>
            <form onSubmit={(e) => {
                e.preventDefault()
                signUp()
            }}>
                <input type="text" value={credentials.email} name="email" onChange={handleChangeAuth} placeholder={'Email'} />
                <input type="text" value={credentials.name} name="name" onChange={handleChangeAuth} placeholder={'Name'} />
                <input type="password" value={credentials.password} name="password" onChange={handleChangeAuth} placeholder={'Password'} />
                <input type="submit" value="Sign Up as a New User"/>
            </form>
        </>
    )
}