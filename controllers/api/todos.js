const Todo = require('../../models/todo')


module.exports = {
    create,
    indexComplete,
    indexNotComplete,
    show,
    update,
    destroy,
    jsonTodos,
    jsonTodo
}

// jsonTodos jsonTodo
// viewControllers

function jsonTodo (_, res) {
    res.json(res.locals.data.todo)
}

function jsonTodos (_, res) {
    res.json(res.locals.data.todos)
}

/****** C - Create *******/
async function create(req, res, next){
    try {
        const todo = await Todo.create(req.body)
        console.log(todo)
        res.locals.data.todo = todo
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

/****** R - Read *****/

async function indexComplete(_, res ,next) {
    try {
        const todos = await Todo.find({ completed: true })
        res.locals.data.todos = todos
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

async function indexNotComplete(_ ,res,next) {
    try {
        const todos = await Todo.find({ completed: false })
        res.locals.data.todos = todos
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


async function show(req ,res,next) {
    try {
        const todo = await Todo.findById(req.params.id)
        res.locals.data.todo = todo
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


/****** U - Update *****/


async function update(req ,res,next) {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.locals.data.todo = todo
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

/***** D - destroy/delete *****/

async function destroy(req ,res,next) {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id)
        res.locals.data.todo = todo
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
