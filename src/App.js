import BookmarkCard from './components/BookmarkCard/BookmarkCard'
import Form from './components/Form/Form'
import styles from './App.module.scss'


export default function App(){
    return(
        <>
            <div className="hero">
                <Form />
                <BookmarkCard />
            </div>
        </>
    )
}