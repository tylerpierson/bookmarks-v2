import { useState, useEffect } from 'react'
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'
import styles from './Auth.module.scss'


export default function Auth ({
  login,
  signUp,
  credentials,
  handleChangeAuth,
  token,
  setToken
}) {
  const [showSignUp, setShowSignUp] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getToken = () => {
      const token = window.localStorage.getItem('token')
      if (!token || token === 'null' || token === 'undefined') return null
      const payload = JSON.parse(window.atob(token.split('.')[1]))
      if (payload.exp < Date.now() / 1000) {
        window.localStorage.removeItem('token')
        return null
      }
      return token
    }
    const myToken = getToken()
    const data = myToken ? JSON.parse(window.atob(myToken.split('.')[1])).user : null
    setUser(data)
    setToken(myToken)
  }, [])
  return (
    <>
      {
            user && user.name
              ? <h1 className={styles.h1}>Welcome {user.name.charAt(0).toUpperCase() + user.name.slice(1).toLowerCase()}</h1>
              : <>
                <button
                    className={styles.button}
                    onClick={() => {
                    setShowSignUp(!showSignUp)
                    }}
                >
                  {showSignUp ? 'Click here to Login' : 'Click here to Sign Up'}
                </button>
                <div className={styles.container}>
                  {
                      showSignUp
                        ? <SignUp
                            signUp={signUp}
                            credentials={credentials}
                            handleChangeAuth={handleChangeAuth}
                          />
                        : <Login
                            login={login}
                            credentials={credentials}
                            handleChangeAuth={handleChangeAuth}
                          />
                  }
                </div>
              </>
        }

    </>
  )
}