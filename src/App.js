import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import Bookmark from './pages/Bookmark/Bookmark'
import About from './pages/About/About'
import Nav from './components/Nav/Nav'

export default function App(){
    return (
        <div className='App'>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>      
                <Route path="/about" element={<About/>}/>      
                <Route path="/dashboard" element={<Dashboard/>}/>      
                <Route path="/bookmarks/:symbol" element={<Bookmark/>}/>                                                
            </Routes>
        </div>
    )
}