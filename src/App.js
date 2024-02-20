import { useState, useEffect } from 'react'
import styles from './App.module.scss'
import Auth from './components/Auth/Auth'
import CreateBookmark from './components/CreateBookmark/CreateBookmark'
import e from 'cors'


export default function App(){
    const [bookmark, setBookmark] = useState({
        title: '',
        url: ''
    })
    const [bookmarks, setBookmarks] = useState([])

    const handleChangeAuth = (event) => {
        setCredentials({...credentials, [event.target.name]: event.target.value})
    }

    const handleChange = (event) => {
        setBookmark({...bookmark, [event.target.name]: event.target.value})
    }

    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
        name: ''
    })
    const [token, setToken] = useState('')
    // Login
    const login = async () => {
        try {
            const response = await fetch('/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: credentials.email, password: credentials.password})
            })
            const tokenResponse = await response.json()
            setToken(tokenResponse)
            localStorage.setItem('token', JSON.stringify(tokenResponse))
        } catch (error) {
            console.error(error)
        }
    }

    // Signup
    const signUp = async () => {
        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...credentials })
            })
            const tokenResponse = await response.json()
            setToken(tokenResponse)
            localStorage.setItem('token', JSON.stringify(tokenResponse))
        } catch (error) {
            console.error(error)
        }
    }

    // createBookmark
    const createBookmark = async () => {
        try {
            const response = await fetch('/api/bookmarks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({...bookmark})
            })
            const data = await response.json()
            setBookmarks([data,...bookmarks])
        } catch (error) {   
            console.error(error)
        } finally {
            setBookmark({
                title: '',
                url: ''
            })
        }
    }
    
    // listBookmarkByUser
    const listBookmarkByUser = async () => {
        try {
            const response = await fetch('/api/users/bookmarks', {
                method: 'GET',
                headers: {
                    'Content-Type': 'applicatoin/json',
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            const data = await response.json()
            setBookmarks(data)
        } catch (error) {
            console.error(error)            
        }
    }

    // UpdateBookmark
    const updateBookmark = async (id, updatedData) => {
        try {
            const response = await fetch(`/api/bookmarks/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(updatedData)
            })
            const data = await response.json()
            const bookmarksCopy = [...bookmarks]
            const index = bookmarksCopy.findIndex(bookmark => id === bookmark._id)
            bookmarksCopy[index] = { ...bookmarksCopy[index], ...updatedData }
            setBookmarks(bookmarksCopy)
        } catch (error) {
            console.error(error)
        }
    }
        

    //deleteBookmarks
    const deleteBookmark = async (id) => {
        try {
            const index = bookmarks.findIndex(bookmark => bookmark._id === id)
            const bookmarksCopy = [...bookmarks]
            const response = await fetch(`/api/bookmarks/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            await response.json()
            bookmarksCopy.splice(index, 1)
            setBookmarks(bookmarksCopy)
        } catch (error) {
            console.error(error)
        }
    }

    // Use effect to display the list of bookmarks when the page first loads
    useEffect(() => {
        const tokenData = localStorage.getItem('token')
        if(tokenData && tokenData !== 'null' && tokenData !== 'undefined'){
            listBookmarkByUser()
        }
    }, [])

    useEffect(() => {
        const tokenData = localStorage.getItem('token')
        if(tokenData && tokenData !== 'null' && tokenData !== 'undefined'){
            setToken(JSON.parse(tokenData))
        }
    }, [])

    return (
        <>
        <div className={styles.App}>
            <Auth 
                login={login}
                credentials={credentials}
                handleChangeAuth={handleChangeAuth}
                signUp={signUp}
            />
            <CreateBookmark 
                createBookmark={createBookmark}
                bookmark={bookmark}
                handleChange={handleChange}
            />
            <ul>
                {bookmarks.length ? bookmarks.map(item => (
                    <li key={item._id}>
                        <h4>{item.title}</h4>
                        <a href={item.url} target="_blank">{item.url}</a>
                    </li>
                )) : <li>No Bookmarks Added</li>}
            </ul>
        </div>
        </>
    )
}