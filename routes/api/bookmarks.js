const express = require('express')
const router = express.Router()
const bookmarkCtrl = require('../../controllers/api/bookmarks')

// Index
router.get('/', bookmarkCtrl.index)
// Create
router.post('/', bookmarkCtrl.create)
// Show
router.get('/:symbol', bookmarkCtrl.show)

module.exports = router