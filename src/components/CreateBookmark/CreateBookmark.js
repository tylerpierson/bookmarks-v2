import styles from './CreateBookmark.module.scss'

export default function CreateBookmark ({
    createBookmark,
    bookmark,
    handleChange
  }) {
    function handleCreateBookmark() {
      if (bookmark.title && bookmark.url && bookmark.url !== 'http://' && bookmark.url !== 'https://') {
          createBookmark()
      }
  }
    return (
      <>
      <div className={styles.formContainer}>
        <h2>Create A Bookmark</h2>
          <div className={styles.container}>
              <form 
              className={styles.form}
              onSubmit={(e) => {
              e.preventDefault()
              handleCreateBookmark()
              }}
              >
                  <div className={styles.inputContainer}>
                      <label>Title<input type='text' value={bookmark.title} name='title' onChange={handleChange} /></label>
                      <label>URL<input type='text' value={bookmark.url ? bookmark.url : 'https://'} name='url' onChange={handleChange} /></label>
                  </div>
                  <input className={styles.button} type='submit' value='Create Bookmark' />
              </form>
          </div>
      </div>
      </>
    )
  }