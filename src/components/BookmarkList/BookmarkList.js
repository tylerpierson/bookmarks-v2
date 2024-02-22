import Bookmark from '../Bookmark/Bookmark'
import styles from './BookmarkList.module.scss'

export default function BookmarkList ({
  bookmarks,
  updateBookmark,
  deleteBookmark
}) {
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.ul}>
          {
            bookmarks.length
              ? bookmarks.map(bookmark => (
                <Bookmark
                  key={bookmark._id}
                  bookmark={bookmark}
                  updateBookmark={updateBookmark}
                  deleteBookmark={deleteBookmark}
                />
            ))
            : <>
              <h2>No Bookmarks Yet... Add one in the Form Above</h2>
              </>
            }
        </ul>
      </div>
    </>
  )
}