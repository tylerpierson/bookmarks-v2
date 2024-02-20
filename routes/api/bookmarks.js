const express = require('express')
const router = express.Router()
const bookmarkCtrl = require('../../controllers/api/bookmarks')
const checkToken = require('../../config/checkToken')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

/* /api/bookmarks/:id
DELETE Bookmarks as User
*/
router.delete('/:id', checkToken, ensureLoggedIn, bookmarkCtrl.destroyBookmark, bookmarkCtrl.respondWithBookmark)

/* /api/bookmarks/:id
UPDATE Bookmarks as User
*/
router.put('/:id', checkToken, ensureLoggedIn, bookmarkCtrl.updateBookmark, bookmarkCtrl.respondWithBookmark)

/* /api/bookmarks/
CREATE Bookmark as User
*/
router.post('/', checkToken, ensureLoggedIn, bookmarkCtrl.createBookmark, bookmarkCtrl.respondWithBookmark)

module.exports = router