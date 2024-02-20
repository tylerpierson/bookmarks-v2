const { model, Schema } = require('mongoose')

const bookmarkSchema = new Schema ({
    title: { type: String, required: true  },
    url: { type: String, required: true, unique: true, trim: true }
}, {
    timestamps: true
})

module.exports = model('Bookmark', bookmarkSchema)