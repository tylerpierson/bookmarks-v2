import { useRef, useState } from 'react';
import styles from './Bookmark.module.scss';

export default function Bookmark({
  bookmark,
  updateBookmark,
  deleteBookmark
}) {
  const [title, setTitle] = useState(bookmark.title);
  const [url, setUrl] = useState(bookmark.url);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e.key === 'Enter') {
      updateBookmark(bookmark._id, { [e.target.name]: e.target.value });
      e.target.blur();
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!e.target.closest('button')) {
      window.open(bookmark.url, '_blank');
    }
  };

  return (
    <>
      <li className={styles.listItem}>
        <form className={styles.bookmark}>
          <input
            name='title'
            className={styles.titleInput}
            value={title}
            onChange={handleTitleChange}
            onKeyDown={handleSubmit}
          />
          <div className={styles.bookmarkUrl}>
            <input
              name='url'
              className={styles.urlInput}
              value={url}
              onChange={handleUrlChange}
              onKeyDown={handleSubmit}
            />
          </div>
        </form>
        <button
          onClick={() => deleteBookmark(bookmark._id)}
        >
          Delete Me
        </button>
        <div className={styles.visitBtnContainer} onClick={handleClick}>
          <div className={styles.visitBtn}>
            VISIT
          </div>
        </div>
        <div className={styles.animation}></div>
      </li>
    </>
  );
}
