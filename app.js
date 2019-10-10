// Modules
const modules = require("./modules.js");

// Routes
modules.app.use('/', require('./routes/data.js'));

// Response Handling
modules.app.use((rjs, req, res, next) => {
    return res.status(rjs.code).json(rjs)
});

// Execute
modules.app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}!`))
module.exports.server = modules.sls(modules.app)