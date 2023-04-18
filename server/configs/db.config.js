const mongoose = require('mongoose');


// connect to mongodb

mongoose.connect("mongodb://127.0.0.1:27017/clurk", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connected to db successfully');
}).catch((err) => {
    console.log('error connecting to db:', err.message, err.code);
})

const db = mongoose.connection

process.on('SIGINT', () => {
    db.close().then(() => {
        process.exit(0)
    })
})

