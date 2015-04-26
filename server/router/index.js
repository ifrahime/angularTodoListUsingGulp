module.exports = function (app) {

    // The signup route
    app.use('/todoList', require('./routes/todoList'));
}
