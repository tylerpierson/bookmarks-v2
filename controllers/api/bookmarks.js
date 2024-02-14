const Bookmark = require('../../models/bookmark')


module.exports = {
    show,
    index,
    create
}

async function index(req, res) {
    try {
        const bookmarks = await Bookmark.find({})
        res.status(200).json(bookmarks)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

/****** C - Create *******/
async function create(req, res){
    try {
        const bookmark = new Bookmark(req.body)
        await bookmark.save()
        res.status(200).json(bookmark)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

/****** R - Show *****/

async function show(req ,res) {
    try {
        const foundBookmark = await Bookmark.findOne({symbol: req.params.symbol})
        if (!foundBookmark) throw new Error("Could not find bookmark")
        res.status(200).json(foundBookmark)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}